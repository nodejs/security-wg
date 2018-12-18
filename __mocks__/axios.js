'use strict'

const axios = jest.genMockFromModule('axios')
const config = require('../tools/reporter/config')
const mockData = require('./mockData')


async function get(url){
    if (url == `${config.apiBaseUrl}/reports/123456`){   
        return mockData.reportData
    }else if (url == `${config.baseUrl}/1234asdf`){
        return mockData.reportUserData
    }
}

axios.get = get
module.exports = axios
