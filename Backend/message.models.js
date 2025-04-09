
import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  role: {
    type: String, enum: ['user', 'ai' ], required: true 
  },
  message: {
    type: String, required: true
  },
  timestamp: { 
    type: Date, default: Date.now
  }
})

const Message = mongoose.model('Message', messageSchema)
export default Message