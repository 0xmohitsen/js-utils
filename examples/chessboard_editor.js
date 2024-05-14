import Modal from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/js/src/modal.js';

import {
  Chessboard,
  FEN,
  PIECE
} from 'https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js';

import {
  ChessboardEditor
} from '../src/index.js';

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.empty,
    style: {pieces: {file: "pieces/staunty.svg"}}
  }
);

const chessboardEditor = new ChessboardEditor(
  document.querySelector('#chessboardEditor'),
  {
    chessboard: chessboard,
    modal: new Modal(document.getElementById('chessboardEditorModal')),
    pieces: document.querySelector('#chessboardEditorModal .modal-body .pieces'),
    buttons: document.querySelector('#chessboardEditorModal .modal-body .buttons'),
    sq: ''
  }
);
