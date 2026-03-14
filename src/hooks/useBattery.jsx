import { useEffect, useState } from 'react';

const useBattery = () => {
  const [battery, setBattery] = useState({
    level: 1,
    charging: false,
    supported: true,
  });

  useEffect(() => {
    let batteryInstance = null;

    const updateBatteryStatus = (bat) => {
      setBattery({
        level: bat.level,
        charging: bat.charging,
        supported: true,
      });
    };

    if ('getBattery' in navigator) {
      navigator.getBattery().then((bat) => {
        batteryInstance = bat;
        updateBatteryStatus(bat);

        // Listen for changes
        bat.addEventListener('levelchange', () => updateBatteryStatus(bat));
        bat.addEventListener('chargingchange', () => updateBatteryStatus(bat));
      });
    } else {
      setBattery((prev) => ({ ...prev, supported: false }));
    }

    return () => {
      if (batteryInstance) {
        batteryInstance.removeEventListener('levelchange', () => updateBatteryStatus(batteryInstance));
        batteryInstance.removeEventListener('chargingchange', () => updateBatteryStatus(batteryInstance));
      }
    };
  }, []);

  return battery;
};

export default useBattery;