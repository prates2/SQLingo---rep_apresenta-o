from dao.lista_atividade_dao import ListaAtividadeDAO


class ListaAtividadeRepository:

  def buscar_por_id(self, lista_id):
    return ListaAtividadeDAO.retrieve_by_id(lista_id)

  def buscar_todas(self):
    return ListaAtividadeDAO.retrieve_all()

  def salvar(self, titulo, descricao, modulo_id, id_lista=None):
    return ListaAtividadeDAO.create(titulo, descricao, modulo_id, id_lista)

  def atualizar(self, lista_id, titulo, descricao, modulo_id):
    return ListaAtividadeDAO.update(lista_id, titulo, descricao, modulo_id)

  def deletar(self, lista_id):
    return ListaAtividadeDAO.delete(lista_id)

  def quantidade(self):
    return ListaAtividadeDAO.size()