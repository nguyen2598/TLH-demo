export default{
    secret: process.env.JWT_SECRET || 'secret',

    ttl: '1h',
};
