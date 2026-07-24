export interface IoTSensorReading {
  timestamp: string;
  dht22: {
    temperatureC: number;
    humidityPercent: number;
  };
  bmp280: {
    pressureHpa: number;
    temperatureC: number;
    altitudeMeters: number;
  };
  mq135: {
    airQualityPpm: number;
    status: 'NORMAL' | 'WARNING' | 'CRITICAL';
    gasDetected: string;
  };
  reactorStatus: 'ONLINE' | 'ACTIVE_PYROLYSIS' | 'IDLE' | 'WARNING';
}

export function generateInitialTelemetryData(count: number = 15): IoTSensorReading[] {
  const data: IoTSensorReading[] = [];
  const now = new Date();

  for (let i = count - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 5000);
    const timeStr = time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const tempBase = 420 + Math.sin(i * 0.3) * 12 + (Math.random() * 4 - 2);
    const pressureBase = 1013.25 + (tempBase - 400) * 0.8 + (Math.random() * 2 - 1);
    const ppmBase = 120 + Math.sin(i * 0.5) * 25 + (Math.random() * 10);

    let status: 'NORMAL' | 'WARNING' | 'CRITICAL' = 'NORMAL';
    if (pressureBase > 1035 || tempBase > 460) status = 'WARNING';

    data.push({
      timestamp: timeStr,
      dht22: {
        temperatureC: Number(tempBase.toFixed(1)),
        humidityPercent: Number((35 - Math.sin(i * 0.2) * 5 + (Math.random() * 2)).toFixed(1)),
      },
      bmp280: {
        pressureHpa: Number(pressureBase.toFixed(2)),
        temperatureC: Number((tempBase + 1.2).toFixed(1)),
        altitudeMeters: 145,
      },
      mq135: {
        airQualityPpm: Number(ppmBase.toFixed(0)),
        status,
        gasDetected: ppmBase > 140 ? 'Syngas (CO/CH4)' : 'Gas Bersih',
      },
      reactorStatus: status === 'WARNING' ? 'WARNING' : 'ACTIVE_PYROLYSIS',
    });
  }

  return data;
}

export function generateSingleNextTick(lastReading: IoTSensorReading): IoTSensorReading {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const tempNoise = Math.random() * 3 - 1.5;
  const newTemp = Math.min(460, Math.max(380, lastReading.dht22.temperatureC + tempNoise));
  
  const pressNoise = Math.random() * 2 - 1;
  const newPress = Math.min(1040, Math.max(1005, lastReading.bmp280.pressureHpa + pressNoise));

  const ppmNoise = Math.random() * 8 - 4;
  const newPpm = Math.min(220, Math.max(90, lastReading.mq135.airQualityPpm + ppmNoise));

  let status: 'NORMAL' | 'WARNING' | 'CRITICAL' = 'NORMAL';
  if (newPress > 1032 || newTemp > 450) status = 'WARNING';
  if (newPress > 1038 || newTemp > 455) status = 'CRITICAL';

  return {
    timestamp: timeStr,
    dht22: {
      temperatureC: Number(newTemp.toFixed(1)),
      humidityPercent: Number((32 + Math.random() * 4).toFixed(1)),
    },
    bmp280: {
      pressureHpa: Number(newPress.toFixed(2)),
      temperatureC: Number((newTemp + 1.1).toFixed(1)),
      altitudeMeters: 145,
    },
    mq135: {
      airQualityPpm: Number(newPpm.toFixed(0)),
      status,
      gasDetected: newPpm > 150 ? 'CO & CH4 High' : 'Syngas Normal',
    },
    reactorStatus: status === 'CRITICAL' ? 'WARNING' : 'ACTIVE_PYROLYSIS',
  };
}
