module.exports = {
    db_url: `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_cluster_id}.mongodb.net/${process.env.db_id}?retryWrites=true&w=majority`,
    cookie_options: { httpOnly: true, path: "/", sameSite: 'lax' }
}