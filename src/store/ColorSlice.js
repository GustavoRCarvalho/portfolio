import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isColorized: true,
}

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    switchColor: (state, _) => {
      state.isColorized = !state.isColorized
    },
  },
})

export const { switchColor } = colorSlice.actions
export default colorSlice.reducer
