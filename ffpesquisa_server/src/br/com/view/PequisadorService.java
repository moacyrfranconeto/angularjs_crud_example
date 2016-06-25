package br.com.view;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.bean.Pesquisador;
import br.com.controler.PesquisaControl;


@Path("CRUDservicepesquisador")
public class PequisadorService {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("loadAll")
	public Response loadAll() {
		System.out.println("CRUDservicepesquisador/loadall");
		return PesquisaControl.getInstance().loadAllPesquisador();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("delete/{cpf}")
	public Response delete(@PathParam("cpf") String cpf) {
		System.out.println("CRUDservicepesquisador/delete: "+ cpf);
		return PesquisaControl.getInstance().deletePesquisador(cpf);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("insert")
	public Response insert(Pesquisador pesquisador) {
		System.out.println("CRUDservicepesquisador/insert: "+pesquisador.toString());
		return PesquisaControl.getInstance().insertPesquisador(pesquisador);
	}

}
