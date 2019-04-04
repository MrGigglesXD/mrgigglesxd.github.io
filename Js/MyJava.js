function ValidarForm()
{

	if(document.frmContacto.txtNombre.value.length==0)
	{
		alert("Favor digitar su nombre")
		document.frmContacto.txtNombre.focus()
		return	false
		
	}
	
	if(document.frmContacto.txtCorreo.value.length==0)
	{
		alert("Favor digitar su Correo")
		document.frmContacto.txtCorreo.focus()
		return	false
	}
	if(document.frmContacto.txtTelefono.value.length==0)
	{
		alert("Favor digitar su Telefono")
		document.frmContacto.txtTelefono.focus()
		return	false

	}
}