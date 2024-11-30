// src/app/dashboard/relatorios/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportsPage: React.FC = () => {
  const [reportType, setReportType] = useState<string>(''); // Tipo de relatório selecionado
  const [startDate, setStartDate] = useState<string>(''); // Data de início do filtro
  const [endDate, setEndDate] = useState<string>(''); // Data de fim do filtro
  const router = useRouter();

  const handleGenerateReport = () => {
    // Lógica para geração do relatório com base nos filtros
    console.log(`Gerando relatório do tipo ${reportType} de ${startDate} até ${endDate}`);
  };

  const handleExportPDF = () => {
    const input = document.getElementById('reportContent');
    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 160);
        pdf.save('relatorio.pdf');
      });
    }
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-purple-700'>Relatórios</h2>
        <button
          onClick={handleBack}
          className='px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition'
        >
          Voltar
        </button>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md space-y-4'>
        {/* Seleção do Tipo de Relatório */}
        <div>
          <label htmlFor='reportType' className='block text-gray-700 font-medium mb-2'>Tipo de Relatório</label>
          <select
            id='reportType'
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
          >
            <option value=''>Selecione o tipo de relatório</option>
            <option value='clientes'>Clientes</option>
            <option value='produtos'>Produtos</option>
            <option value='pedidos'>Pedidos</option>
            <option value='fornecedores'>Fornecedores</option>
          </select>
        </div>

        {/* Seleção das Datas */}
        <div className='flex space-x-4'>
          <div className='w-1/2'>
            <label htmlFor='startDate' className='block text-gray-700 font-medium mb-2'>Data de Início</label>
            <input
              type='date'
              id='startDate'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor='endDate' className='block text-gray-700 font-medium mb-2'>Data de Fim</label>
            <input
              type='date'
              id='endDate'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className='flex justify-end space-x-4'>
          <button
            onClick={handleGenerateReport}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
          >
            Gerar Relatório
          </button>
          <button
            onClick={handleExportPDF}
            className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600'
          >
            Exportar PDF
          </button>
        </div>
      </div>

      {/* Conteúdo do Relatório */}
      <div id='reportContent' className='mt-6 bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-medium text-gray-700'>Visualização do Relatório</h3>
        <p className='text-gray-600'>Selecione as opções acima para visualizar o relatório.</p>
        {/* Conteúdo dinâmico do relatório gerado será exibido aqui */}
      </div>
    </div>
  );
};

export default ReportsPage;
