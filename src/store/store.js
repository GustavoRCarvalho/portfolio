import { configureStore } from "@reduxjs/toolkit"
import colortReducer from "./ColorSlice"

export default configureStore({
  reducer: {
    color: colortReducer,
  },
})
