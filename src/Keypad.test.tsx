import { render, fireEvent } from '@testing-library/react';
import Keypad from './Components/keypad';

describe('Keypad Component', () => {
    let mockOnButtonClick: jest.Mock;

    beforeEach(() => {
        mockOnButtonClick = jest.fn();
    });

    test('renders all buttons', () => {
        const { getByText } = render(
            <Keypad onButtonClick={mockOnButtonClick} />
        );

        const buttons = [
            'MC', 'MR', 'M+', 'M-', 'C', 'CE', '√', '%',
            '7', '8', '9', '/', '4', '5', '6', '*',
            '1', '2', '3', '-', '0', '.', '=', '+',
        ];

        buttons.forEach((btn) => {
            expect(getByText(btn)).toBeInTheDocument();
        });
    });

    test('calls onButtonClick with correct value when a button is clicked', () => {
        const { getByText } = render(
            <Keypad onButtonClick={mockOnButtonClick} />
        );

        const buttonToClick = '5';
        fireEvent.click(getByText(buttonToClick));

        expect(mockOnButtonClick).toHaveBeenCalledWith(buttonToClick);
    });

    test('calls onButtonClick for special buttons', () => {
        const specialButtons = ['C', 'CE', '=', '+'];

        const { getByText } = render(
            <Keypad onButtonClick={mockOnButtonClick} />
        );

        specialButtons.forEach((btn) => {
            fireEvent.click(getByText(btn));
            expect(mockOnButtonClick).toHaveBeenCalledWith(btn);
        });
    });
});
