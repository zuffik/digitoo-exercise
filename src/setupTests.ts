import '@testing-library/jest-dom/extend-expect';
import '@sheerun/mutationobserver-shim';

class MutationObserver {
    observe() {}
    disconnect() {}
}

global.MutationObserver = MutationObserver as any;

jest.mock('./components/storybook/StorybookContext.tsx', () => ({
    __esModule: true,
    useIsStorybook: jest.fn(() => false)
}))
