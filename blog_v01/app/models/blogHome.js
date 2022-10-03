module.exports = {
    blogHome: (connection, callback) => {
      const sql = 'select * from postagem;';
      connection.query(sql, callback);
    },
  }