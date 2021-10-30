import * as React from "react";
import ReactDOM from "react-dom";
import Tela from "./Tela.css";

export default () => {
  return (
    <div className="page">
      <div className="modal--overlay">
        <div className="modal--box">
          <p>Seleção dos Nós de Hierarquia</p>

          <div className="modal--items">
            <form>
              <div className="item">
                <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
                <div className="item--bar">
                        <input type="checkbox" name="masculino" />
                        <label>Masculino</label>
                    </div>
                    <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="masculino" />
                    <label>Masculino</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>
            </form>
          </div>
        </div>

        <div className="buttons">
          <button className="cancel">Cancelar</button>
          <button className="conclude">Concluir</button>
        </div>
      </div>
    </div>
  );
};