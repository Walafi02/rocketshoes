import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsgjoGx883WzDqIf0EfbjMZvaxkwV-U9Bchbe9ybAsplakiluYM61KL1ICNxhILS_uG1WkNmWmD9Y&usqp=CAc"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,15</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>$R251.80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#715fc1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>$R1.952,02</strong>
        </Total>
      </footer>
    </Container>
  );
}
