import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CmsResult } from '../types/pages';

interface State {
  pages: Record<string, CmsResult>
}

interface ThunkReturn {
  path: string;
  data: CmsResult;
}

export const fetchByPath = createAsyncThunk<ThunkReturn, string, { state: State }>(
  'pages/fetchByPath',
  async (path, thunkApi) => {
    if (thunkApi.getState().pages[path]) {
      return { path, data: thunkApi.getState().pages[path] as NonNullable<CmsResult> }
    }
    else {

      var response = await axios.get<CmsResult>(`https://localhost:5001/api/v0/content/page?path=${path}`);
      return { path, data: response.data }
    }

  }
)

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    pages: {}
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchByPath.fulfilled, (state, action) => {
      state.pages[action.payload.path] = action.payload.data;
    })
  }
});

export default pagesSlice.reducer;