import './index.css';

function History() {
    return (
        <div className="history">
            <form action="" className="table__sort">
                <label>Sortare după:</label>
                <select className="table__sort__select">
                    <option>Id</option>
                    <option>Nume expeditor</option>
                    <option>Nume destinatar</option>
                    <option>Data cererii</option>
                    <option>Data plecării curierului</option>
                    <option>Data livrării</option>
                    <option>Tip echipament</option>
                    <option>Cantitate</option>
                    <option>Nume curier</option>
                </select>
                <select className="table__sort__select">
                    <option>Ascendent</option>
                    <option>Descendent</option>
                </select>
            </form>
            <table className="table">
                <thead class="table__header">
                    <tr>
                        <th>Id</th>
                        <th>Expeditor</th>
                        <th>Destinatar</th>
                        <th>Data cererii</th>
                        <th>Data plecării curierului</th>
                        <th>Data livrării</th>
                        <th>Tip echipament</th>
                        <th>Cantitate</th>
                        <th>Nume curier</th>
                    </tr>
                </thead>
                <tbody class="table__body">
                    <tr>
                        <td>7</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Spitalul Județean Iași</td>
                        <td>Spitalul Județean Focșani</td>
                        <td>25.03.2021</td>
                        <td>27.03.2021</td>
                        <td>28.03.2021</td>
                        <td>Mască</td>
                        <td>10 000</td>
                        <td>Laurențiu Ștefan</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default History;
