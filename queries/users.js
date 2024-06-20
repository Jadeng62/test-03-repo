const db = require('../db/dbConfig')

const createNewUser = async (user) => {
  console.log('create query', user)
  const { uid, email, username, first_name, last_name, photo } = user

  try {
    const newUser = await db.one(
      'INSERT INTO users (uid, email, username, first_name, last_name, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [uid, email, username, first_name, last_name, photo]
    )
    console.log('newUser', newUser)
    return newUser
  } catch (error) {
    console.log('Error creating user', error)
  }
}

const findUserByID = async (uid) => {
  try {
    const query = 'SELECT * FROM users WHERE uid = $1'
    console.log('uid', uid)
    const user = await db.oneOrNone(query, uid)
    console.log('find', user)
    return user
  } catch (error) {
    console.error('Error finding user by username:', error)
    throw error
  }
}
module.exports = {
  createNewUser,
  findUserByID,
}