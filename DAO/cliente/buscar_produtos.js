import {conexao} from '../conexao.js'

async function buscarProdutos(){
    console.log('DAO de Produto')
      const sql = `SELECT * FROM Produtos;`
      
      const conn = await conexao()
      try {
          // Executar a consulta
          const [rows, fields] = await conn.query(sql);
          await conn.end()
          return rows
        } catch (err) {
          return err.message
        }
  }
  
  async function buscarProduto(codigo){
      const sql = `SELECT * FROM Produtos WHERE codigo = ?`
      
      const conn = await conexao()
      
      try {
          // Executar a consulta
          const [rows, fields] = await conn.query(sql, [codigo]);
          await conn.end()
          return rows
        } catch (err) {
          return err.message
        }
  }
  
  export {buscarProduto, buscarProdutos}