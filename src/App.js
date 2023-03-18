// import React, { useState, useEffect } from "react";
// import Papa from "papaparse";
// import url from "./useCsv/tab04.csv";

// import "./index.css";

// const ReactApp = () => {
//   const [records, setRecords] = useState([]);
//   const [filteredRecords, setFilteredRecords] = useState([]);
//   const [filteredJoiceRecords, setFilteredJoiceRecords] = useState([]);
//   const [filters, setFilters] = useState({
//     name: "",
//   });

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.text())
//       .then((csv) => {
//         const rows = Papa.parse(csv).data;
//         setRecords(rows);
//       });
//   }, []);

//   useEffect(() => {
//     if(filters.name.length > 0){
//       setFilteredRecords([])
//     }
//   },[filters.name])

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedRecords = records
//       .map((res) => res)
//       .filter((row) => {
//         if (row[1] == null) {
//           return false;
//         }
//         return row[1].includes(filters.name);
//       });

//     setFilteredRecords(updatedRecords);
//   };

//   console.log(filteredRecords)
//   const handleSortDesc = () => {
//     const sortedPrices = filteredRecords?.map((res) => res[4]).filter(res => res !== '-').sort((a, b) => {
//       // Remova a vírgula e converta a string para um número
//       const numA = parseFloat(a.replace(',', '.'));
//       const numB = parseFloat(b.replace(',', '.'));

//       // Ordene do maior para o menor
//       return numA - numB;
//     });

//     // Atualize o estado com a lista de preços classificada
//     console.log(sortedPrices);
//   };

//   const capitalizedString =
//     filters?.name[0]?.toUpperCase() + filters.name.slice(1);
//   const list = (i) => {
//     return filteredRecords.map(res => res[i])
//   }
//   const keys = [
//     "Código do alimento",
//     "nome_do_alimento",
//     "Modo de preparo",
//     "Forma de apresentação",
//     "energia",
//     "Vitamina B1 (mg)",
//     "Vitamina B2 (mg)",
//     "Vitamina B6 (mg)",
//     "Vitamina B12 (mcg)",
//     "Vitamina C (mg)",
//     "Vitamina D (mcg)",
//     "Vitamina E (mg)",
//     "Vitamina K (mcg)",
//     "Ácido fólico (mcg)",
//     "Niacina (mg)",
//   ];
//   const rowData = [];
//   for (var i = 0; i < keys.length; i++) {
//     rowData[keys[i]] = [list(i)];
//   }
//   console.log('data', rowData)
//   const handleSortCres = () => {
//     const sortedPrices = rowData.map((res) => res.energia.map(res => res[0])).sort((a, b) => {
//       // Remova a vírgula e converta a string para um número
//       const numA = parseFloat(a.replace(',', '.'));
//       const numB = parseFloat(b.replace(',', '.'));

//       // Ordene do maior para o menor
//       return numB - numA;
//     });

//     // Atualize o estado com a lista de preços classificada
//     console.log(sortedPrices);
//   };
//   console.log('fgf',[rowData]?.map(res => res.nome_do_alimento.map(res => res)))

//   return (
//     <div className="container">
//       <h1>
//         Tabela 4 - Vitaminas na composição de alimentos por 100 gramas de parte
//         comestível
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={filters.name === "" ? "" : capitalizedString}
//             onChange={(event) =>
//               setFilters({ ...filters, name: event.target.value })
//             }
//           />
//           <button disabled={filters.name === '' || undefined ? true : false} type="submit">Search</button>
//         </div>
//       </form>
//       <div>
//         <button onClick={handleSortCres}>Ordenar ⬆️</button>
//         <button onClick={handleSortDesc}>Ordenar ⬇️</button>
//       </div>

//       <table>
//         <thead style={{ background: "grey" }}>
//           <tr>
//             <th>Nome</th>
//             <th>Preparação</th>
//             <th>Energia (Kcal)</th>
//             <th>Proteína (g)</th>
//             <th>Lipídios totais (g</th>
//             <th>Carboidrato (g</th>
//             <th>Fibra alimentar total (g)</th>
//           </tr>
//         </thead>
//         <tbody style={{ background: "#F0F0F0" }}>
//           {filteredRecords.map((record) => {
//             return (
//               <tr key={record[0]}>
//                 <td>{record[1]}</td>
//                 <td>{record[3]}</td>
//                 <td>{record[4]}</td>
//                 <td>{record[5]}</td>
//                 <td>{record[6]}</td>
//                 <td>{record[7]}</td>
//                 <td>{record[8]}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default ReactApp;
// import React, { useState } from 'react';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [totalSaved, setTotalSaved] = useState(0);
//   const [taskName, setTaskName] = useState('');
//   const [taskValue, setTaskValue] = useState(0);
//   const [editMode, setEditMode] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editValue, setEditValue] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (editMode !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editMode] = { name: editName, value: editValue };
//       setTasks(updatedTasks);
//       setEditMode(null);
//       setEditName('');
//       setEditValue(0);
//     } else {
//       setTasks([...tasks, { name: taskName, value: taskValue, completed: false }]);
//       setTaskName('');
//       setTaskValue(0);
//     }
//   };

//   const handleTaskNameChange = (event) => {
//     if (editMode !== null) {
//       setEditName(event.target.value);
//     } else {
//       setTaskName(event.target.value);
//     }
//   };

//   const handleTaskValueChange = (event) => {
//     if (editMode !== null) {
//       setEditValue(parseInt(event.target.value));
//     } else {
//       setTaskValue(parseInt(event.target.value));
//     }
//   };

//   const handleTaskCompleted = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//     if (updatedTasks[index].completed) {
//       setTotalSaved(totalSaved + tasks[index].value);
//     } else {
//       setTotalSaved(totalSaved - tasks[index].value);
//     }
//       };

//       const handleEdit = (index) => {
//         setEditMode(index);
//         setEditName(tasks[index].name);
//         setEditValue(tasks[index].value);
//       };

//       const handleDelete = (index) => {
//         const updatedTasks = [...tasks];
//         updatedTasks.splice(index, 1);
//         setTasks(updatedTasks);
//         if (tasks[index].completed) {
//           setTotalSaved(totalSaved - tasks[index].value);
//         }
//       };

//       return (
//         <div className='container full-width full-height scrollable'>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Nome da tarefa:
//               <input type="text" value={editMode !== null ? editName : taskName} onChange={handleTaskNameChange} />
//             </label>
//             <br />
//             <label>
//               Valor a ser poupado:
//               <input type="number" value={editMode !== null ? editValue : taskValue} onChange={handleTaskValueChange} />
//             </label>
//             <br />
//             <button type="submit">{editMode !== null ? 'Salvar' : 'Adicionar tarefa'}</button>
//             {editMode !== null && <button onClick={() => setEditMode(null)}>Cancelar</button>}
//           </form>
//           <ul>
//             {tasks.map((task, index) => (
//               <li key={index}>
//                 <input type="checkbox" checked={task.completed} onChange={() => handleTaskCompleted(index)} />
//                 {task.name} - R${task.value}
//                 <button onClick={() => handleEdit(index)}>Editar</button>
//                 <button onClick={() => handleDelete(index)}>Excluir</button>
//               </li>
//             ))}
//           </ul>
//           <p>Total poupado: R${totalSaved}</p>
//         </div>
//       );
//     }

//     export default App;
import React, { useState, useEffect, useMemo } from "react";
import SplashScreen from "./splash";

const ChallengeTable = () => {
  const totalWeeks = 52;

  const initialAmount = 22.47;
  const weeklyIncrement = 3;

  const weeks = useMemo(() => {
    const w = [];
    for (let i = 1; i <= totalWeeks; i++) {
      w.push({
        week: i,
        amount: initialAmount + weeklyIncrement * (i - 1),
      });
    }
    return w;
  }, [initialAmount, weeklyIncrement]);

  const [completedWeeks, setCompletedWeeks] = useState([]);
  const [totalSaved, setTotalSaved] = useState(0);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  // Carrega as semanas concluídas do localStorage
  useEffect(() => {
    const completedWeeksFromStorage = localStorage.getItem("completedWeeks");
    if (completedWeeksFromStorage) {
      setCompletedWeeks(JSON.parse(completedWeeksFromStorage));
    }
    setLoading(false);
    setInitialized(true);
  }, [weeks]);

  // Atualiza o totalSaved sempre que há uma mudança nas semanas concluídas
  useEffect(() => {
    if (initialized) {
      let total = 0;
      completedWeeks.forEach((week) => {
        total += weeks[week - 1].amount;
      });
      setTotalSaved(total);

      // Atualiza as informações salvas no localStorage
      localStorage.setItem("completedWeeks", JSON.stringify(completedWeeks));
    }
  }, [completedWeeks, weeks, initialized]);

  const handleCheck = (week) => {
    const weekIndex = completedWeeks.findIndex((w) => w === week);
    if (weekIndex === -1) {
      setCompletedWeeks([...completedWeeks, week]);
    } else {
      setCompletedWeeks(completedWeeks.filter((w) => w !== week));
    }
  };

  if (loading || !initialized) {
    return <SplashScreen />;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Semana</th>
            <th>Quantia a ser economizada</th>
            <th>Concluída</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week.week}>
              <td>{week.week}</td>
              <td className="cifrao">R$ {week.amount.toFixed(2)}</td>
              <td>
                <input
                  className="input_checkbox"
                  type="checkbox"
                  checked={completedWeeks.includes(week.week)}
                  onChange={() => handleCheck(week.week)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <p>R$ {totalSaved.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ChallengeTable;
