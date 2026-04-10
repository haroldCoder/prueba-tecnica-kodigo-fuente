CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agent (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    
    priority VARCHAR(10) NOT NULL 
        CHECK (priority IN ('Critical', 'High', 'Medium', 'Low')),

    status VARCHAR(15) NOT NULL DEFAULT 'Open'
        CHECK (status IN ('Open', 'In Progress', 'Resolved')),

    client_id INT NOT NULL,
    agent_id INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_client
        FOREIGN KEY (client_id) 
        REFERENCES client(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_agent
        FOREIGN KEY (agent_id) 
        REFERENCES agent(id)
        ON DELETE SET NULL
);