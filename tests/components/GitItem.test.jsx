import { render, screen } from '@testing-library/react';
import { GitItem } from '../../src/components/GitItem';



describe('Pruebas en <GitItem /> ', () => { 
  const title = 'Saitama'; 
  const url = 'https://one-punch.com/saitama.jp';
test('debe de hacer mactch con el snapshot', () => {
  const { container } = render( <GitItem title={ title } url={ url } />);
  expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GitItem title={ title } url={ url } />);  
    //screen.debug();
    //expect( screen.getByRole('img').src).toBe(url);
    //expect( screen.getByRole('img').alt).toBe(title);

    const {src, alt } = screen.getByRole('img'); 
    expect( src ).toBe( url ); 
    expect( alt ).toBe( alt ); 
  });

  test('debe de mostrar el titulo en el componente', () => {
    render( <GitItem title={ title } url={ url } />);
    expect( screen.getByText( title )).toBeTruthy();
  })

});