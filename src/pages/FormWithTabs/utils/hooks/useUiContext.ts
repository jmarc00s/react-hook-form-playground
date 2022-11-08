import { useContext } from 'react';
import { UiContext } from '../context/UiContext';

export const useUiContext = () => useContext(UiContext);
