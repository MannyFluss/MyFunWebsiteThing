import client from './redisClient.js';
async function setSomethingInRedis() {
    try {
        await client.set('my_key', 'my_value');
        console.log('Set key successfully');
    }
    catch (err) {
        console.error('Redis set error:', err);
    }
}
async function getSomethingFromRedis() {
    try {
        const value = await client.get('my_key');
        console.log('Got value from Redis:', value);
    }
    catch (err) {
        console.error('Redis get error:', err);
    }
}
// Export your functions or call them as needed
export { setSomethingInRedis, getSomethingFromRedis };
