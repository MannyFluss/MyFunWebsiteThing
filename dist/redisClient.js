import { createClient } from 'redis';
// Create and configure the Redis client
const client = createClient({
    url: 'redis://redis:6379' // Configure as needed
});
// Handle connection errors
client.on('error', (err) => console.log('Redis Client Error', err));
// Connect to Redis
client.connect().catch(err => console.error('Redis connect error', err));
export default client;
