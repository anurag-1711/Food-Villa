import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

// test("Logo should load on rendering header", () => {

//     // Load Header
//     const header = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header />
//             </Provider>
//         </StaticRouter>
//     );
//     console.log(header);
//     // Check if logo is loaded

//     const logo = header.getByTestId('logo');
//     console.log(logo);

//     expect(logo.src).toBe("http://localhost/dummyLogo.png");
// })

test("Online status should be green on rendering header", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const onlineStatus = header.getByTestId('online-status');

    expect(onlineStatus.innerHTML).toBe("✅");
})


test("Cart should have zero items on rendering header", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const cart = header.getByTestId('cart');

    expect(cart.innerHTML).toBe("Cart - 0");
})
