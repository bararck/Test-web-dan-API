const axios = require('axios');
const { faker } = require('@faker-js/faker');

// Fungsi untuk menghasilkan nomor telepon acak
function generateRandomPhoneNumber() {
    return `081234567${Math.floor(Math.random() * 100)}`; // Menghasilkan nomor telepon acak
}

// Fungsi untuk menghasilkan email acak
function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `emailanda${randomNumber}@example.com`; // Menghasilkan email acak
}

// Fungsi untuk melakukan permintaan pendaftaran
async function registerUser () {
    const phoneNumber = generateRandomPhoneNumber();
    const email = generateRandomEmail();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const data = {
        phoneNumber: phoneNumber,
        email: email,
        firstName: firstName,
        lastName: lastName,
        isWhatsAppOn: true
    };

    try {
        const response = await axios.post('https://edge.cermati.com/rest/auth/register-v4', data, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9',
                'client': 'WEB_BROWSER',
                'content-type': 'application/json',
                'cookie': '_gcl_au=1.1.655223406.1738675430; _ga=GA1.1.2099209524.1738675430; csrf-secret=s%3A0dozdaJ8yw2p2CZoiU4_Gbbd.mM761JXcr654OuhL%2BWIZp%2FwPG47wzzuCrz1%2BpkxwhL4; keystone.sid=s%3AQi7-PBYswdrVHILXkVf7YkkJ2f87FEOO.M4besX%2F8XmxSFoudGGz9Ql%2BgjA18UAetXZ64GfEm4Q4; csrfTokenApp=s%3AF3qgtJSC-vvjwqTqrdUgWSuVqN1BJ8gMCfYwytxdjUrG7EbRb9KA.qSzp9XK4GY3xjVzgB9PRb9JhLmCuxISONQLPOIBYxtI; csrfToken2App=s%3AWFCQkCkEpoliFxxrF6ZbUhvP.4UC%2B4Of%2FLg0JY8u5DIaI24DRQeVq2jyF%2FzHLTHxNz9M; _ga_SNRJD3Z4BY=GS1.1.1738675430.1.0.1738675434.56.0.0; moe_uuid=089a7854-08f2-444b-ba88-69f3701ad203; csrf-token=s%3AyHzm3TVx-MoYMukw0r2FwyrSlNIymNuRmgr0.8RYAwBMoUBfaMe8RnSDVBYkZEh7Kv7VIuLKkd7BCcy4',
                'origin': 'https://www.cermati.com',
                'priority': 'u=1, i',
                'referer': 'https://www.cermati.com/',
                'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0 .0.0 Safari/537.36',
                'x-app-build': '',
                'x-app-dvc-data': '{"deviceId":"bbb88f4a726ac41e86d283feb481800d","appsflyerId":"","appInstanceId":"2099209524.1738675430","firebaseId":"web","type":"web","appsflyerDevice":{},"os":"10"}',
                'x-app-platform': 'superapp',
                'x-app-version': '',
                'x-device-id': 'bbb88f4a726ac41e86d283feb481800d',
                'x-device-manufacturer': 'Win32',
                'x-device-model': '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
                'x-device-os': 'Windows',
                'x-device-os-version': '10',
                'x-recaptcha-token': 'AeIGufFznwFhrYCaMnXuie5_sJPFNjIlNKf0QoPQ5punHDWBmN1w3o4PJtek_hT9BqZaW3nEblOgt4Vfbz1GwfTX-wP7A93Yp7T6O-s1OVLSBP1qDoabzvVKGtG4qHhkbBXassgVTbUpha2C5mvfD3vHYR50m3s0KAz0FrgryO3o-yOTCQ:U=2581575726000000',
                'x-recaptcha-v2-input': '03AFcWeA79CZpV6loFPOLvY3aBxSir7iZKlB71COI_Tqffgs6PPgogugyMLFD4RkmhGBBy-Y5gH0a1aq_mXMmTlo64fpstdbC2vpU0MZ9MVg9zln1Lo7lN_hEuUFhWAazcHpXMHbbJEcWePwMdmJOp6PjSjmQIavPISOVut_1eWXUfhw-FvnFWiMOpnuuztzzasRSYnycVAyS_8SdpX-6qQAvmsg9boAUVEkS6_nTtslkOY8uDSFUdVUKPO4bFurFrCp5Nf_gZzAaOYh7VHwBPdyYW-WlMfr-W7nhrjoWFzMkuIg_FmjznugCoDTifXuYABnMqTmc6IGKEqdKahkAOWBbXVWHzWQ8khJb_bXSHs7q0YQFP4uNQ8CFvFlbQwIYXtsQouAdK6g9OG9Zc6EWOeX0jadDTovdpGCDFZb93QFE0kHlrsiWO6idzsiv7DVpsNJlwjmdaBfu_mRzguOcGiBm7KGSr_wVZVxlWhx1rYHwVNZqiWRY0Nz6ROqlVOyw4YsnOINdDTnnn8rd8XJlQxRPEAWV0-5g8xroGq3f2aWFiL5wP4ChPEw9Xa054O0Nsz5yzljjqrH-y10C15pAG_qb6Qn3FPp42CfdE9P3BGvyrAfrT4RsdVGoiiajQeYWGUEnfcrWnoqjfESE-kLbhEcg5damknAptGCVjd3s_hbymmn4YC5xd4assXLNAZbdxYpViMBfH-DkaWGrncJgbwgZFACfWSuURtz2MfKvMsu7Wl1MJsFc06yy3tpN2j-QAauLbfwMgB50qJDpkt97ZVRzzst_6MKcZSoiihaH2Nr52yBuehQxXizaJPd6q8ycpPdkrq_jX_IzXEPvq3tWX1nAesWJWG6mJNCVY5MQNd3I2il5O5m-0Xg_-npXDjfR-oiJKCzpEA0exvqUIKMw3diUInpSFd1k2aCLAlmu9mpi932vAKrufkg38jNyABGpzF6M1IbkzUewt'
            }
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// Panggil fungsi untuk mendaftar pengguna
registerUser ();