import Formulario from "../../../../components/Form/Form";
const Create = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Creación
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Formulario />
          {/* volver a poner el formulario despues de provar*/}
        </div>
      </main>
    </>
  );
};

export default Create;
