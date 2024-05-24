function Main () {
    while (true) {
        brick.clearScreen()
        if (brick.buttonEnter.wasPressed()) {
            if (btnPressed == 0) {
                btnPressed = 1
            } else if (btnPressed == 1) {
                btnPressed = 2
            } else {
                btnPressed = 0
            }
            // Сбросить значения максимальных и минимальных
            if (btnPressed == 1) {
                nxtLightSensor1Min = sensors.nxtLight1.light(NXTLightIntensityMode.ReflectedRaw)
                nxtLightSensor2Min = sensors.nxtLight2.light(NXTLightIntensityMode.ReflectedRaw)
                nxtLightSensor3Min = sensors.nxtLight3.light(NXTLightIntensityMode.ReflectedRaw)
                nxtLightSensor4Min = sensors.nxtLight4.light(NXTLightIntensityMode.ReflectedRaw)
                nxtLightSensor1Max = nxtLightSensor1Min
                nxtLightSensor2Max = nxtLightSensor2Min
                nxtLightSensor3Max = nxtLightSensor3Min
                nxtLightSensor4Max = nxtLightSensor4Min
            }
        }
        nxtLightSensor1RefRaw = sensors.nxtLight1.light(NXTLightIntensityMode.ReflectedRaw)
        nxtLightSensor2RefRaw = sensors.nxtLight2.light(NXTLightIntensityMode.ReflectedRaw)
        nxtLightSensor3RefRaw = sensors.nxtLight3.light(NXTLightIntensityMode.ReflectedRaw)
        nxtLightSensor4RefRaw = sensors.nxtLight4.light(NXTLightIntensityMode.ReflectedRaw)
        if (btnPressed == 1) {
            nxtLightSensor1Min = Math.min(nxtLightSensor1Min, nxtLightSensor1RefRaw)
            nxtLightSensor2Min = Math.min(nxtLightSensor2Min, nxtLightSensor2RefRaw)
            nxtLightSensor3Min = Math.min(nxtLightSensor3Min, nxtLightSensor3RefRaw)
            nxtLightSensor4Min = Math.min(nxtLightSensor4Min, nxtLightSensor4RefRaw)
            nxtLightSensor1Max = Math.max(nxtLightSensor1Max, nxtLightSensor1RefRaw)
            nxtLightSensor2Max = Math.max(nxtLightSensor2Max, nxtLightSensor2RefRaw)
            nxtLightSensor3Max = Math.max(nxtLightSensor3Max, nxtLightSensor3RefRaw)
            nxtLightSensor4Max = Math.max(nxtLightSensor4Max, nxtLightSensor4RefRaw)
        }
        brick.showValue("refRawPort1", nxtLightSensor1RefRaw, 1)
        brick.showValue("refRawPort2", nxtLightSensor2RefRaw, 2)
        brick.showValue("refRawPort3", nxtLightSensor3RefRaw, 3)
        brick.showValue("refRawPort4", nxtLightSensor4RefRaw, 4)
        if (btnPressed >= 1) {
            brick.showString("Ports Max and Min: ", 6)
            brick.showString("1) min: " + nxtLightSensor1Min + ", max: " + nxtLightSensor1Max, 7)
            brick.showString("2) min: " + nxtLightSensor2Min + ", max: " + nxtLightSensor2Max, 8)
            brick.showString("3) min: " + nxtLightSensor3Min + ", max: " + nxtLightSensor3Max, 9)
            brick.showString("4) min: " + nxtLightSensor4Min + ", max: " + nxtLightSensor4Max, 10)
            if (btnPressed == 1) {
                brick.showString("Press Enter to freeze", 12)
            } else {
                brick.showString("Press Enter to exit", 12)
            }
        } else {
            brick.showString("Press Enter to start", 11)
            brick.showString("show max and min", 12)
        }
        pause(10)
    }
}
let nxtLightSensor4RefRaw = 0
let nxtLightSensor3RefRaw = 0
let nxtLightSensor2RefRaw = 0
let nxtLightSensor1RefRaw = 0
let nxtLightSensor4Max = 0
let nxtLightSensor3Max = 0
let nxtLightSensor2Max = 0
let nxtLightSensor1Max = 0
let nxtLightSensor4Min = 0
let nxtLightSensor3Min = 0
let nxtLightSensor2Min = 0
let nxtLightSensor1Min = 0
let btnPressed = 0
Main()
