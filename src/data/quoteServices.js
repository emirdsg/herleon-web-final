export const quoteCategories={
 Espejos:[{name:'Con luz LED'},{name:'Con biseles'},{name:'Con marcos personalizados'}],
 Techos:[{name:'Celda'},{name:'Damero'},{name:'Corredizo'}],
 Mamparas:[{name:'En serie',options:['Serie 25','Serie 80']},{name:'Sistema Nova'},{name:'PVC · Antirruido'},{name:'Colgantes'},{name:'Plegadizas'}],
 Puertas:[
  {name:'De ducha',children:[
   {name:'Sistema euro',options:['Fijo','Corrediza']},
   {name:'Kit',options:['Fijo','Corrediza','Doble corrediza']},
   {name:'Batientes',options:['Fijo y batiente','Puerta batiente sola']},
   {name:'Plegadizas',options:['Plegadiza']}
  ]},
  {name:'Serie 35'},{name:'Sistema Nova'},{name:'Colgantes'},{name:'Plegadizas'},{name:'De celosías · Solo aluminio'}
 ],
 Ventanas:[
  {name:'En serie',options:['Serie 20','Serie 25','Serie 60']},
  {name:'Sistema Nova · Ventanas simples'},
  {name:'De celosías · Solo aluminio'},
  {name:'PVC · Antirruido'}
 ]
};
export function inferQuoteCategory(service,detail=''){
 const text=detail.toLowerCase();let category='',system='',variant='';
 if(service==='Puertas'){
  if(text.includes('ducha')){category='De ducha';if(text.includes('euro'))system='Sistema euro';else if(text.includes('kit'))system='Kit';else if(text.includes('batiente'))system='Batientes';else if(text.includes('plegadiz'))system='Plegadizas';}
  else if(text.includes('35'))category='Serie 35';else if(text.includes('nova'))category='Sistema Nova';else if(text.includes('colgante'))category='Colgantes';else if(text.includes('plegadiz'))category='Plegadizas';else if(text.includes('celos'))category='De celosías · Solo aluminio';
 }
 if(service==='Ventanas'){
  const series=text.match(/serie\s*(20|25|60)\b/);
  if(series){category='En serie';variant='Serie '+series[1];}
  else if(text.includes('en serie'))category='En serie';else if(text.includes('nova'))category='Sistema Nova · Ventanas simples';else if(text.includes('celos'))category='De celosías · Solo aluminio';else if(text.includes('pvc'))category='PVC · Antirruido';
 }
 if(service==='Mamparas'){
  const series=text.match(/serie\s*(25|80)\b/);
  if(series){category='En serie';variant='Serie '+series[1];}
  else if(text.includes('en serie'))category='En serie';else if(text.includes('nova'))category='Sistema Nova';else if(text.includes('pvc'))category='PVC · Antirruido';else if(text.includes('colgante'))category='Colgantes';else if(text.includes('plegadiz'))category='Plegadizas';
 }
 if(service==='Techos'){
  // A multi-option advice request must leave the choice open.
  const matches=['Celda','Damero','Corredizo'].filter(name=>text.includes(name.toLowerCase()));
  if(matches.length===1)category=matches[0];
 }
 if(service==='Espejos'){
  const matches=[['led','Con luz LED'],['bisel','Con biseles'],['marco','Con marcos personalizados']].filter(([keyword])=>text.includes(keyword));
  if(matches.length===1)category=matches[0][1];
 }
 return {category,system,variant,custom:''};
}
