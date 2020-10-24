import * as React from 'react';

const StorybookContext = React.createContext<boolean>(false);

export const StorybookContextProvider = (props: {children: React.ReactNode}) => (
    <StorybookContext.Provider value={true}>{props.children}</StorybookContext.Provider>
);

export const useIsStorybook = () => React.useContext(StorybookContext);
