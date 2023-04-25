import { render, waitFor, fireEvent } from '@testing-library/react';
import Body from '../Body';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data';
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
});

test("Shimmer should load on Homepage", () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);

    const shimmer = body.getByTestId('shimmer');

    expect(shimmer.children.length).toBe(15);
    // console.log(shimmer);
});

test("Restaurant should load on Homepage", async () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);

    await waitFor(() => expect(body.getByTestId('search-btn')))

    const resList = body.getByTestId('res-list');

    expect(resList.children.length).toBe(15);
    // console.log(resList);
});

test("Search for string(food) on Homepage", async () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);

    await waitFor(() => expect(body.getByTestId('search-btn')))

    const input = body.getByTestId('search-input');

    fireEvent.change(input, {
        target: {
            value: "food"
        }
    })

    const searchBtn = body.getByTestId('search-btn');

    fireEvent.click(searchBtn);

    const resList = body.getByTestId('res-list');

    expect(resList.children.length).toBe(2);
    // console.log(resList);
});
