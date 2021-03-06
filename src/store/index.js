import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './tasks/taskSlice';
import formSlice from './form/formSlice';

export default configureStore({
  reducer: {
    tasks: taskSlice,
    form: formSlice
  }
});