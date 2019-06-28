# Bug Bounty Criteria

This document describes the criteria for eligibility of monetary reward for security researchers
who engage with the Node.js Ecosystem
[bug bounty program](https://hackerone.com/nodejs-ecosystem/).

## Module Characteristics

1. **Module download count** - x >= 1000 downloads a month which accounts for 7% of npm packages 
(courtesy of @ChALkeR here https://github.com/nodejs/security-wg/issues/151#issue-303209104)
2. **Approved Modules** - A list of modules where their maintainers approved to be included in the
bug bounty program

### Other Module Characteristics (WIP)

Work-in-progress to assess the following characteristics:

* **Module dependents count** - we don't have enough experience to gauge what this means
* **Vulnerability type** - Consider instead to have a criteria based on vulnerability severity rather than 
type, so to match anything >= 4.0 which means Medium and higher.

## Modules list 

The following is a list of modules which are eligible in the monetary reward due to their maintainers
explicitly confirming to collaborate with the working group and security researchers to receive and 
resolve security reports.

### Confirmed

* [lodash](https://github.com/lodash/lodash) (confirmed approval from John-David Dalton)
* [fastify](https://github.com/fastify/fastify) (confirmed approval from Matteo Collina)
* [pino](https://github.com/pinojs/pino) (confirmed approval from Matteo Collina)
* [MQTT.js](https://github.com/mqttjs/MQTT.js) (confirmed approval from Matteo Collina)

### WIP

* jQuery
* node-red
* hapi (all packages under the GH org)
* Koajs (all packages under the GH org)
* Webpack
* ESLint
* socket.io
