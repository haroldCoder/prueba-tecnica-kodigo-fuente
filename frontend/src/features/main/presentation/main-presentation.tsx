import { useState } from 'react';
import { Tickets, Clients, Agents } from './components';

export const MainPresentation = () => {
    const [activeTab, setActiveTab] = useState<'tickets' | 'clients' | 'agents'>('tickets');

    return (
        <div className='px-8'>
            <div className="w-full max-w-7xl mx-auto px-6">
                <nav className="flex space-x-8 border-b border-brandGray-200 mb-8">
                    <button
                        onClick={() => setActiveTab('tickets')}
                        className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'tickets' ? 'text-brandBlue-600' : 'text-brandGray-500 hover:text-brandGray-700'
                            }`}
                    >
                        Tickets
                        {activeTab === 'tickets' && (
                            <div className="absolute -bottom-px left-0 w-full h-0.5 bg-brandBlue-600" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('clients')}
                        className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'clients' ? 'text-brandBlue-600' : 'text-brandGray-500 hover:text-brandGray-700'
                            }`}
                    >
                        Clientes
                        {activeTab === 'clients' && (
                            <div className="absolute -bottom-px left-0 w-full h-0.5 bg-brandBlue-600" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('agents')}
                        className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'agents' ? 'text-brandBlue-600' : 'text-brandGray-500 hover:text-brandGray-700'
                            }`}
                    >
                        Agentes
                        {activeTab === 'agents' && (
                            <div className="absolute -bottom-px left-0 w-full h-0.5 bg-brandBlue-600" />
                        )}
                    </button>
                </nav>
            </div>

            <div className="bg-card shadow-sm min-h-[400px]">
                {activeTab === 'tickets' && <Tickets />}
                {activeTab === 'clients' && <Clients />}
                {activeTab === 'agents' && <Agents />}
            </div>
        </div>
    );
}
