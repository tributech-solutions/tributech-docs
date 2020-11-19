# IoT Hub Template

The Template in this folder is used for the quickstart guide of the documentation. It is a slight modification of the [template](https://dev.azure.com/tributechsolutions/Tributech%20DataSpace%20Kit/_git/tributech-dsk-azure-arm-templates?path=%2Fdsk-iot-hub-and-bridge%2FmainTemplate.json) in the Azure Dev Ops repository. 

If you updated the Template in the repo for some reason, make sure to update this copy of the template as well.

## Modifications

- Default to IoT Hub Tier: 'S1'
- Default ID-Server to: 'https://id.azuretrial.dataspace-hub.com'
- Removed input for ... used value ... instead
    - Docer Registry => 'pubtributech.azurecr.io'
    - Image Name => 'dsk-iot-hub-bridge'
    - Registry User => 'pubtributech'
    - Registry Password => registry password