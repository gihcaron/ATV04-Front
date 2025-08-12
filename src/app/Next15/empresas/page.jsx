import EmpresaCard from '../componentes/CardNext';

export default function Empresas() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: '#fff5e4', minHeight: '100vh', padding: '40px 0' }}>
      <EmpresaCard
        imagem="/images/empresa1.png"
        nome="Empresa 1"
        descricao="Descrição da empresa 1."
        link="https://empresa1.com"
      />
      <EmpresaCard
        imagem="/images/empresa2.png"
        nome="Empresa 2"
        descricao="Descrição da empresa 2."
        link="https://empresa2.com"
      />
      
    </div>
  );
}