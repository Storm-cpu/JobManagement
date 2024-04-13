import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng cung cấp tên vùng'],
      maxlength: 50,
    },
    code: {
      type: String,
      required: [true, 'Vui lòng cung cấp mã vùng'],
      maxlength: 100,
    },
  },
  { timestamps: true }
)

export default mongoose.model('City', CitySchema)
