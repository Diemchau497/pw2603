import { test, expect } from '@playwright/test';


test('GET booking details', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(response);
});

test('PUT update abooking', async ({ request }) => {
    //get token
    const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });
    expect(authResponse.status()).toBe(200);
    const authData = await authResponse.json();
    const token = authData.token;

    const partialUpdatePayload = {
        totalprice: 200,
        additionalneeds: 'Doe',
    };



    const response = await request.patch('https://restful-booker.herokuapp.com/booking/1', {
        data: partialUpdatePayload,
        headers: {
            'Cookie': `token=${token}`
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(response);
});