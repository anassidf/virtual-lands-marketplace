import Gun from 'gun'
import 'gun/sea'

export const gun = Gun({peers:['http://localhost:5000']})

export let userOperation = gun.user()


 

