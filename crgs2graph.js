const fs = require('fs');
const crgs = JSON.parse(fs.readFileSync('prime-2730666.crgs.json', 'utf8'));
const elements = {nodes:[], edges:[]};
['issuers', 'obligors', 'others'].forEach(role => {
  elements.nodes.push({data: {id: role, label:role}})
  crgs[0][role].forEach(company => {
    elements.nodes.push({data: {id: company.mmgid, label:company.name, parent:role}})
    if (company.advisors) {
      company.advisors.forEach(advisorRole => {
        const roleName = advisorRole.role.name;
        advisorRole.companies.forEach(advisor => {
          elements.nodes.push({data: {id: advisor.mmgid, label:advisor.name}})
          const edgeId = advisor.mmgid + company.mmgid
          const sourceId = advisor.mmgid
          const targetId = company.mmgid
          const edgeLabel = `is ${roleName} to`;
          elements.edges.push({data: {id: edgeId, source: sourceId, target: targetId, label:edgeLabel}})
        })
      })
    }
  })
})
console.log(JSON.stringify(elements, null, 2))