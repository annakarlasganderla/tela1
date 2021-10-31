import * as React from "react";
import "./Tela.css";

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
                        <input type="checkbox" name="feminino-aberto" />
                        <label>Feminino Aberto</label>
                    </div>
                    <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="feminino-fechado" />
                    <label>Feminino Fechado</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="chinelo" />
                    <label>Chinelo</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="sem-no" />
                    <label>Sem nó</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="tenis-esportivo" />
                    <label>Tênis Esportivo</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>

              <div className="item">
              <div className="item--bar">
                    <input type="checkbox" name="infantil" />
                    <label>Infantil</label>
                </div>
                <i class="fas fa-chevron-down"></i>
              </div>
            </form>
          </div>
        </div>

        <div className="buttons">
          <button className="cancel"><i class="far fa-times-circle"></i>Cancelar</button>
          <button className="conclude">Concluir</button>
        </div>
      </div>
    </div>
  );
};