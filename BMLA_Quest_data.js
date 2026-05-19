/* BMLA Quest v3 — data file (loaded by BMLA_Quest.html). Sources: Lay 3rd ed + IBA course materials. */

const TOPICS = [
  { id:'systems',     name:'Linear Systems', emoji:'🧮', color:'#a855f7', lectures:[1,2,3,4,5], desc:'Systems, REF/RREF, vector eqs, Ax=b, solution sets.' },
  { id:'indep',       name:'Linear Indep & Transformations', emoji:'➗', color:'#ec4899', lectures:[6,7,8], desc:'Linear independence, transformations, standard matrix.' },
  { id:'matrix',      name:'Matrix Operations & Inverse', emoji:'🔢', color:'#f97316', lectures:[9,10,11], desc:'Matrix algebra, inverse, IMT.' },
  { id:'det',         name:'Determinants', emoji:'🎯', color:'#eab308', lectures:[12,13], desc:'Cofactor expansion, properties, det(AB).' },
  { id:'eigen',       name:'Eigenvalues, Diagonalization & Markov', emoji:'⚡', color:'#10b981', lectures:[14,15,16,29], desc:'Characteristic eq, eigenvectors, A=PDP⁻¹, Markov steady state.' },
  { id:'lp',          name:'Linear Programming', emoji:'📈', color:'#3b82f6', lectures:[17,18,19,20,21,22,23,24], desc:'Formulation, graphical, simplex, duality.' },
  { id:'transassign', name:'Transportation & Assignment', emoji:'🚚', color:'#8b5cf6', lectures:[25,26,27,28], desc:'NW corner, MODI, VAM, Hungarian.' }
];

const LECTURES = [
  { n:1, topic:'systems', title:'Systems of Linear Equations' },
  { n:2, topic:'systems', title:'Row Reduction and Echelon Forms' },
  { n:3, topic:'systems', title:'Vector Equations' },
  { n:4, topic:'systems', title:'The Matrix Equation Ax = b' },
  { n:5, topic:'systems', title:'Solution Sets · Applications' },
  { n:6, topic:'indep', title:'Linear Independence' },
  { n:7, topic:'indep', title:'Introduction to Linear Transformations' },
  { n:8, topic:'indep', title:'Matrix of a Linear Transformation · Linear Models' },
  { n:9, topic:'matrix', title:'Matrix Operations' },
  { n:10, topic:'matrix', title:'The Inverse of a Matrix' },
  { n:11, topic:'matrix', title:'Characterizations of Invertible Matrices' },
  { n:12, topic:'det', title:'Introduction to Determinants' },
  { n:13, topic:'det', title:'Properties of Determinants' },
  { n:14, topic:'eigen', title:'Eigenvalues and Eigenvectors' },
  { n:15, topic:'eigen', title:'The Characteristic Equation' },
  { n:16, topic:'eigen', title:'Diagonalization' },
  { n:29, topic:'eigen', title:'⭐ Markov Chains & Steady State' },
  { n:17, topic:'lp', title:'LP · Introductory Example' },
  { n:18, topic:'lp', title:'Graphical Solutions of LP' },
  { n:19, topic:'lp', title:'Applications of LP' },
  { n:20, topic:'lp', title:'The Simplex Method' },
  { n:21, topic:'lp', title:'Simplex Method (cont.)' },
  { n:22, topic:'lp', title:'Computer-Based Solution Methods' },
  { n:23, topic:'lp', title:'The Dual Problem' },
  { n:24, topic:'lp', title:'The Dual Problem (cont.)' },
  { n:25, topic:'transassign', title:'Transportation Models' },
  { n:26, topic:'transassign', title:'Solution Methods for Transportation' },
  { n:27, topic:'transassign', title:'Assignment Models' },
  { n:28, topic:'transassign', title:'Solution Methods for Assignment' }
];

const CHEATSHEET = [
  { topicId:'systems', title:'Linear Systems · REF / RREF', items:[
    { h:'REF — 3 conditions', b:'(1) Nonzero rows above all-zero. (2) Leading entry strictly right of one above. (3) All entries below a leading entry = 0.' },
    { h:'RREF — +2 conditions', b:'(4) Each leading entry = 1. (5) Each leading 1 is only nonzero in its column. RREF unique.' },
    { h:'Existence & Uniqueness', b:'Consistent iff no row [0…0 | b], b≠0. Unique iff no free vars; infinite iff at least one free var.' },
    { h:'Vector / Matrix equivalence', b:'Ax=b ⇔ x₁a₁+x₂a₂+…+xₙaₙ=b ⇔ b ∈ Span{a₁,…,aₙ}.' },
    { h:'Homogeneous Ax=0', b:'Always has trivial x=0. Nontrivial iff at least one free variable.' }
  ]},
  { topicId:'indep', title:'Linear Independence & Transformations', items:[
    { h:'Linear Independence', b:'{v₁,…,vₚ} independent iff x₁v₁+…+xₚvₚ=0 only when all xᵢ=0.' },
    { h:'Quick tests', b:'• Set with zero vector → dependent. • Two vectors dependent iff one is scalar multiple. • p > n always forces dependence.' },
    { h:'T: ℝⁿ → ℝᵐ', b:'Standard matrix A = [T(e₁) … T(eₙ)] gives T(x) = Ax.' },
    { h:'One-to-one & Onto', b:'T 1-1 ⇔ columns of A independent ⇔ pivot every column. T onto ⇔ columns span ℝᵐ ⇔ pivot every row.' }
  ]},
  { topicId:'matrix', title:'Matrix Operations & Inverse', items:[
    { h:'Matrix multiplication', b:'(AB)ᵢⱼ = row i of A · col j of B. Need #cols(A)=#rows(B). NOT commutative. (AB)ᵀ = BᵀAᵀ.' },
    { h:'Inverse 2×2', b:'A=[[a,b],[c,d]], det=ad−bc≠0 → A⁻¹ = (1/det)·[[d,−b],[−c,a]].' },
    { h:'Inverse general', b:'Form [A | I], row-reduce to [I | A⁻¹]. If left half won\'t become I → singular.' },
    { h:'Invertible Matrix Theorem', b:'A invertible ⇔ row-equiv to I ⇔ n pivots ⇔ Ax=0 only trivial ⇔ columns independent ⇔ x↦Ax 1-1 ⇔ Ax=b unique ⇔ columns span ℝⁿ ⇔ onto ⇔ Aᵀ invertible ⇔ det A ≠ 0 ⇔ 0 not eigenvalue.' },
    { h:'Identities', b:'(AB)⁻¹ = B⁻¹A⁻¹ · (Aᵀ)⁻¹ = (A⁻¹)ᵀ · (cA)⁻¹ = (1/c)A⁻¹.' }
  ]},
  { topicId:'det', title:'Determinants', items:[
    { h:'2×2 and triangular', b:'det[[a,b],[c,d]] = ad−bc. Triangular: det = product of diagonal.' },
    { h:'Cofactor expansion', b:'det A = Σⱼ (−1)^(i+j)·aᵢⱼ·Mᵢⱼ. Pick row/col with most zeros.' },
    { h:'Row ops effect', b:'R₁→R₁+kR₂: unchanged. Swap: ×(−1). Scale by k: ×k.' },
    { h:'Key formulas', b:'det(AB) = det(A)·det(B) · det(Aᵀ) = det(A) · det(A⁻¹) = 1/det(A) · det(kA) = kⁿ det(A).' },
    { h:'Cramer\'s Rule', b:'For Ax=b, det A ≠ 0: xᵢ = det(Aᵢ)/det(A), where Aᵢ replaces col i with b.' }
  ]},
  { topicId:'eigen', title:'Eigenvalues, Diagonalization & Markov ⭐', items:[
    { h:'Definition', b:'v≠0 is eigenvector of A with eigenvalue λ iff Av = λv. Eigenspace = null space of (A−λI).' },
    { h:'Procedure', b:'1. Solve det(A−λI)=0 (char equation) for λ. 2. For each λ, row-reduce (A−λI), find null space basis = eigenspace basis.' },
    { h:'Useful facts', b:'• Triangular → eigenvalues = diagonal. • Sum eigenvalues = trace(A). • Product = det(A). • A invertible ⇔ 0 not an eigenvalue.' },
    { h:'Diagonalization', b:'A diagonalizable iff has n LI eigenvectors. A = PDP⁻¹, P cols = eigenvectors, D = diag(λ\'s). Aᵏ = PDᵏP⁻¹.' },
    { h:'Quick test', b:'n distinct eigenvalues → always diagonalizable. If geo mult < alg mult → defective, NOT diagonalizable.' },
    { h:'⭐ Markov Chains', b:'Transition: xₜ₊₁ = Mxₜ. Steady state p: solve (M−I)p = 0 subject to Σpᵢ = 1. = eigenvector for λ=1.' }
  ]},
  { topicId:'lp', title:'Linear Programming', items:[
    { h:'Standard form', b:'Max Z = c₁x₁+…+cₙxₙ s.t. aᵢ₁x₁+…+aᵢₙxₙ ≤ bᵢ (bᵢ ≥ 0), xⱼ ≥ 0.' },
    { h:'Graphical Method', b:'1. Plot constraints. 2. Find feasible region. 3. List corner points. 4. Evaluate Z. 5. Optimum at a corner.' },
    { h:'Special cases', b:'No feasible region → infeasible. Unbounded → unbounded. Two corners tie → alternative optima.' },
    { h:'Simplex setup', b:'≤ adds slack. ≥ adds surplus minus artificial. = adds artificial. Initial BFS: decision vars=0, slacks=bᵢ.' },
    { h:'Simplex iteration (max)', b:'Entering: most negative Cⱼ−Zⱼ. Leaving: min non-neg ratio bᵢ/aᵢⱼ. Stop when all Cⱼ−Zⱼ ≥ 0.' },
    { h:'Stopping signals', b:'All Cⱼ−Zⱼ ≥ 0 → optimal. Entering col all ≤ 0 → unbounded. Artificial with nonzero value at optimum → infeasible.' },
    { h:'Duality', b:'Primal (max ≤) ↔ Dual (min ≥). #dual vars = #primal constraints. Strong duality: optimal Z values equal.' }
  ]},
  { topicId:'transassign', title:'Transportation & Assignment', items:[
    { h:'Transportation setup', b:'Min Σcᵢⱼxᵢⱼ s.t. row sums = supply, col sums = demand. Balanced if Σsᵢ = Σdⱼ; else dummy row/col.' },
    { h:'Initial BFS', b:'(a) North-West Corner. (b) Least Cost. (c) VAM: penalty = (2nd − smallest cost), allocate to cheapest cell of largest-penalty row/col.' },
    { h:'MODI / u-v', b:'Basic cells: uᵢ + vⱼ = cᵢⱼ (u₁=0). Non-basic: Δᵢⱼ = cᵢⱼ−(uᵢ+vⱼ). All Δ ≥ 0 → optimal. Else most negative Δ enters via closed loop.' },
    { h:'Degeneracy', b:'Occurs when fewer than m+n−1 basic cells. Insert ε (epsilon → 0) in cells to maintain count; treat ε as basic during MODI; drop ε in final answer.' },
    { h:'Assignment Problem', b:'n workers × n jobs. Special transportation: supply = demand = 1.' },
    { h:'Hungarian Method', b:'1. Subtract row min. 2. Subtract col min. 3. Cover zeros with min lines. 4. Lines = n → optimal. 5. Else subtract smallest uncovered from uncovered, add to doubly-covered, repeat.' }
  ]}
];

const TUTORIALS = {
  systems: {
    title: 'Chapter 1 · Linear Systems',
    intro: 'Foundation of the entire course. Master these and the rest of linear algebra falls into place.',
    lectures: [
      { n:1, title:'Lecture 1 — Systems of Linear Equations',
        learn:['What a linear equation is.','Consistent vs inconsistent.','Unique vs infinite solutions.','Augmented matrix.'],
        theory:[
          { h:'Linear equation', b:'$a_1x_1+\\cdots+a_nx_n=b$. No squares, products, or roots.' },
          { h:'Three possibilities only', b:'(a) no solution, (b) one, or (c) infinitely many. Never 2 or 5.' },
          { h:'Three row operations', b:'<strong>R1 Replacement:</strong> add multiple of one row to another. <strong>R2 Swap.</strong> <strong>R3 Scale</strong> by nonzero. All preserve solution set.' }
        ],
        examples:[
          { q:'Solve $\\begin{cases} 2x+3y=8 \\\\ x-y=1 \\end{cases}$',
            steps:['Augmented: $\\begin{pmatrix}2&3&|&8\\\\1&-1&|&1\\end{pmatrix}$','Swap rows then $R_2\\to R_2-2R_1$: $\\begin{pmatrix}1&-1&|&1\\\\0&5&|&6\\end{pmatrix}$','Back-substitute: $y=6/5$, $x=11/5$.'],
            answer:'$x=11/5,\\;y=6/5$. <strong>Unique.</strong>'
          },
          { q:'Is $\\begin{cases}x+2y=3\\\\2x+4y=7\\end{cases}$ consistent?',
            steps:['$R_2\\to R_2-2R_1$: row 2 becomes $0=1$.'],
            answer:'<strong>Inconsistent.</strong> Parallel lines.'
          },
          { q:'Solve $\\begin{cases}x_1-2x_2+x_3=0\\\\2x_2-8x_3=8\\\\-4x_1+5x_2+9x_3=-9\\end{cases}$',
            steps:['$R_3\\to R_3+4R_1$, $R_2\\to \\tfrac{1}{2}R_2$, $R_3\\to R_3+3R_2$.','Back-substitute: $x_3=3$, $x_2=16$, $x_1=29$.'],
            answer:'$x_1=29,\\;x_2=16,\\;x_3=3$.'
          }
        ]
      },
      { n:2, title:'Lecture 2 — Row Reduction & Echelon Forms',
        learn:['REF & RREF conditions.','Pivot positions/columns.','Basic vs free variables.','Existence & Uniqueness theorem.'],
        theory:[
          { h:'REF — 3 conditions', b:'(1) Zero rows at bottom. (2) Each leading entry strictly right of one above. (3) Entries below a leading entry = 0.' },
          { h:'RREF — +2', b:'(4) Each leading entry = 1. (5) Only nonzero in its column. Unique.' },
          { h:'Existence & Uniqueness', b:'Consistent iff rightmost col is NOT a pivot. Unique iff no free vars.' }
        ],
        examples:[
          { q:'<strong>Course Q1:</strong> Solve $\\begin{cases}x_1+4x_2+5x_3-x_4=-2\\\\-2x_1-8x_2-10x_3+2x_4=4\\\\-x_1+2x_2+3x_3+5x_4=5\\\\3x_1+3x_2+4x_3+x_4=1\\end{cases}$',
            steps:['$R_2=-2R_1$ → $R_2$ becomes zero row.','$R_3\\to R_3+R_1$, $R_4\\to R_4-3R_1$. Reduce.','Pivots end up in cols 1,2,3. Col 4 has no pivot → $x_4$ free.','Set $x_4=t$, back-substitute.'],
            answer:'<strong>Infinitely many solutions</strong>, parameterized by $x_4=t$.'
          },
          { q:'<strong>Course Q2:</strong> Solve $\\begin{cases}x_1-2x_2-x_3+3x_4=0\\\\-2x_1+4x_2+5x_3-5x_4=3\\\\3x_1-6x_2-6x_3+8x_4=2\\end{cases}$',
            steps:['$R_2\\to R_2+2R_1$, $R_3\\to R_3-3R_1$.','$R_3\\to R_3+R_2$ → row 3 becomes $[0\\;0\\;0\\;0\\;|\\;5]$.','Contradiction $0=5$.'],
            answer:'<strong>Inconsistent.</strong>'
          },
          { q:'From RREF $\\begin{pmatrix}1&0&-2&0&|&3\\\\0&1&4&0&|&-1\\\\0&0&0&1&|&5\\end{pmatrix}$ write the general solution.',
            steps:['Pivots 1,2,4 → $x_3=t$ free.','$x_1=3+2t$, $x_2=-1-4t$, $x_4=5$.'],
            answer:'$\\mathbf{x}=\\begin{pmatrix}3\\\\-1\\\\0\\\\5\\end{pmatrix}+t\\begin{pmatrix}2\\\\-4\\\\1\\\\0\\end{pmatrix}$.'
          },
          { q:'For which $h$ is $\\begin{cases}x_1-3x_2=4\\\\-2x_1+6x_2=h\\end{cases}$ consistent?',
            steps:['$R_2\\to R_2+2R_1$: row 2 becomes $(0\\;0\\;|\\;h+8)$.','Need $h+8=0$.'],
            answer:'$h=-8$. Then infinite solutions.'
          }
        ]
      },
      { n:3, title:'Lecture 3 — Vector Equations & Span',
        learn:['Linear combinations.','Test Span membership.','Geometric pictures.'],
        theory:[
          { h:'Span', b:'$\\text{Span}\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\}$ = all linear combinations. "$\\mathbf{b}$ in Span?" = "does $[\\mathbf{a}_1\\;\\cdots\\;\\mathbf{a}_n\\;|\\;\\mathbf{b}]$ have a solution?"' },
          { h:'Geometry', b:'1 nonzero vector → line through origin. 2 non-parallel vectors → plane.' }
        ],
        examples:[
          { q:'Is $\\mathbf{b}=(4,-1,8)^T$ in $\\text{Span}\\{\\mathbf{a}_1=(1,-2,-5)^T, \\mathbf{a}_2=(2,5,6)^T\\}$?',
            steps:['Row-reduce $[\\mathbf{a}_1\\;\\mathbf{a}_2\\;|\\;\\mathbf{b}]$.','Bottom row: $0 = 140/9$ — contradiction.'],
            answer:'<strong>No</strong>, not in span.'
          },
          { q:'For which $h$ is $\\mathbf{y}=(h,-5,-3)^T$ in $\\text{Span}\\{(1,-1,-2),(-3,8,6)\\}$?',
            steps:['Row-reduce; bottom row: $(0\\;0\\;|\\;-3+2h)$.'],
            answer:'$h=3/2$.'
          },
          { q:'Describe Span$\\{(1,2),(3,6)\\}$ geometrically.',
            steps:['$(3,6) = 3(1,2)$ — parallel.','Linear combos stay on a single line.'],
            answer:'<strong>Line through origin</strong> in direction $(1,2)$.'
          }
        ]
      },
      { n:4, title:'Lecture 4 — Matrix Equation $A\\mathbf{x}=\\mathbf{b}$',
        learn:['$A\\mathbf{x}$ as linear combo of columns.','Existence theorem.'],
        theory:[
          { h:'$A\\mathbf{x}$', b:'$A\\mathbf{x} = x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n$ — linear combo of columns.' },
          { h:'Existence theorem', b:'$A\\mathbf{x}=\\mathbf{b}$ solvable for every $\\mathbf{b}\\in\\mathbb{R}^m$ ⇔ $A$ has pivot in every row.' }
        ],
        examples:[
          { q:'Compute $A\\mathbf{x}$ for $A=\\begin{pmatrix}1&2&-1\\\\0&-5&3\\end{pmatrix}$, $\\mathbf{x}=(4,3,7)^T$.',
            steps:['$4(1,0)+3(2,-5)+7(-1,3) = (4,0)+(6,-15)+(-7,21) = (3,6)$.'],
            answer:'$A\\mathbf{x}=(3,6)^T$.'
          },
          { q:'Do columns of $A=\\begin{pmatrix}1&3&4\\\\-4&2&-6\\\\-3&-2&-7\\end{pmatrix}$ span $\\mathbb{R}^3$?',
            steps:['Row-reduce → only 2 pivots, no pivot in row 3.'],
            answer:'<strong>No.</strong>'
          }
        ]
      },
      { n:5, title:'Lecture 5 — Solution Sets & Applications',
        learn:['Parametric vector form for $A\\mathbf{x}=\\mathbf{0}$.','$\\mathbf{x}=\\mathbf{p}+\\mathbf{x}_h$.','Application to chemistry.'],
        theory:[
          { h:'Key theorem', b:'If $A\\mathbf{x}=\\mathbf{b}$ consistent with particular $\\mathbf{p}$, every solution = $\\mathbf{p}+\\mathbf{x}_h$ where $\\mathbf{x}_h$ solves $A\\mathbf{x}=\\mathbf{0}$.' }
        ],
        examples:[
          { q:'Solve $A\\mathbf{x}=\\mathbf{0}$ parametrically for $A=\\begin{pmatrix}3&5&-4\\\\-3&-2&4\\\\6&1&-8\\end{pmatrix}$.',
            steps:['Row-reduce to RREF: $\\begin{pmatrix}1&0&-4/3\\\\0&1&0\\\\0&0&0\\end{pmatrix}$.','$x_3=t$ free.'],
            answer:'$\\mathbf{x}=t(4/3,0,1)^T$ — line.'
          },
          { q:'<strong>Balance:</strong> $x_1\\,\\text{Na}_3\\text{PO}_4+x_2\\,\\text{Ba(NO}_3)_2 \\to x_3\\,\\text{Ba}_3(\\text{PO}_4)_2+x_4\\,\\text{NaNO}_3$',
            steps:['Na: $3x_1=x_4$. P: $x_1=2x_3$. Ba: $x_2=3x_3$. N: $2x_2=x_4$.','Smallest positive integers: $x_1=2,x_2=3,x_3=1,x_4=6$.'],
            answer:'$2\\,\\text{Na}_3\\text{PO}_4+3\\,\\text{Ba(NO}_3)_2 \\to \\text{Ba}_3(\\text{PO}_4)_2+6\\,\\text{NaNO}_3$.'
          }
        ]
      }
    ]
  },
  indep: { title:'Chapter 1 (cont.) — Linear Independence & Transformations', intro:'Coming in v4 — see Cheat Sheet + Flashcards.', lectures:[] },
  matrix: { title:'Chapter 2 — Matrix Operations & Inverse', intro:'Coming in v4 — see Cheat Sheet + Flashcards.', lectures:[] },
  det: { title:'Chapter 3 — Determinants', intro:'Coming in v4 — see Cheat Sheet + Flashcards.', lectures:[] },
  eigen: {
    title: 'Chapter 5 · Eigenvalues, Diagonalization & Markov ⭐',
    intro: 'The post-midterm crown jewel — almost guaranteed on the final. Master: char eq → eigenvalues → eigenvectors → diagonalize → use for $A^k$ or Markov steady state.',
    lectures: [
      { n:14, title:'Lecture 14 — Eigenvalues & Eigenvectors',
        learn:['Definition $A\\mathbf{v}=\\lambda\\mathbf{v}$ and why $\\mathbf{v}\\neq\\mathbf{0}$.','Verify if a vector is an eigenvector.','Find the <strong>eigenspace</strong> for a known eigenvalue.','Triangular shortcut.','Independence of eigenvectors for distinct eigenvalues.'],
        theory:[
          { h:'Definition', b:'$\\lambda$ is an eigenvalue of $A$ if some nonzero $\\mathbf{v}$ satisfies $A\\mathbf{v}=\\lambda\\mathbf{v}$. Zero vector excluded (trivially works for any $\\lambda$).' },
          { h:'Geometric meaning', b:'$A$ stretches $\\mathbf{v}$ by $\\lambda$ without rotating off its line. Negative $\\lambda$ flips direction.' },
          { h:'Eigenspace', b:'For each $\\lambda$, the set $\\{\\mathbf{v}:(A-\\lambda I)\\mathbf{v}=\\mathbf{0}\\}=\\text{Nul}(A-\\lambda I)$. Its dimension = geometric multiplicity.' },
          { h:'Triangular shortcut', b:'Triangular matrix → eigenvalues = diagonal entries. Read them off.' },
          { h:'Independence', b:'Eigenvectors for distinct eigenvalues are linearly independent → $n$ distinct eigenvalues ⇒ diagonalizable.' }
        ],
        examples:[
          { q:'Verify $\\mathbf{v}=(6,-5)^T$ is an eigenvector of $A=\\begin{pmatrix}1&6\\\\5&2\\end{pmatrix}$ and find $\\lambda$.',
            steps:['$A\\mathbf{v}=(1\\cdot 6+6\\cdot(-5),\\;5\\cdot 6+2\\cdot(-5))=(-24,20)$.','Compare to $\\mathbf{v}$: $(-24,20)=-4\\cdot(6,-5)$.'],
            answer:'<strong>Yes</strong>, eigenvector with $\\lambda=-4$.'
          },
          { q:'Is $\\lambda=7$ an eigenvalue of $A=\\begin{pmatrix}1&6\\\\5&2\\end{pmatrix}$? Find a basis for its eigenspace.',
            steps:['$A-7I=\\begin{pmatrix}-6&6\\\\5&-5\\end{pmatrix}$.','Row-reduce: $\\begin{pmatrix}1&-1\\\\0&0\\end{pmatrix}$.','$x_1=x_2=t$ → $\\mathbf{v}=t(1,1)$.'],
            answer:'<strong>Yes</strong>. Basis: $\\{(1,1)\\}$.'
          },
          { q:'Find eigenspace for $\\lambda=2$ of $A=\\begin{pmatrix}4&-1&6\\\\2&1&6\\\\2&-1&8\\end{pmatrix}$.',
            steps:['$A-2I=\\begin{pmatrix}2&-1&6\\\\2&-1&6\\\\2&-1&6\\end{pmatrix}$ — all rows identical.','Row-reduce → $\\begin{pmatrix}1&-1/2&3\\\\0&0&0\\\\0&0&0\\end{pmatrix}$.','Two free vars: $x_2=s, x_3=t$. $x_1=s/2-3t$.','Basis vectors (after scaling): $(1,2,0)$ and $(-3,0,1)$.'],
            answer:'Basis: $\\{(1,2,0),\\;(-3,0,1)\\}$. Geo mult = <strong>2</strong>.'
          },
          { q:'Find all eigenvalues of upper triangular $A=\\begin{pmatrix}3&6&-8\\\\0&0&6\\\\0&0&2\\end{pmatrix}$.',
            steps:['Triangular → read diagonal.'],
            answer:'$\\lambda=3,0,2$. Note $\\lambda=0$ means $A$ is singular.'
          },
          { q:'Show: eigenvectors $\\mathbf{v}_1,\\mathbf{v}_2$ for distinct $\\lambda_1\\neq\\lambda_2$ are LI.',
            steps:['Suppose $c_1\\mathbf{v}_1+c_2\\mathbf{v}_2=\\mathbf{0}$ (*).','Apply $A$: $c_1\\lambda_1\\mathbf{v}_1+c_2\\lambda_2\\mathbf{v}_2=\\mathbf{0}$ (**).','Multiply (*) by $\\lambda_1$, subtract from (**): $c_2(\\lambda_2-\\lambda_1)\\mathbf{v}_2=\\mathbf{0}$.','$\\lambda_2\\neq\\lambda_1$ and $\\mathbf{v}_2\\neq\\mathbf{0}$ → $c_2=0$. Then $c_1=0$.'],
            answer:'Set is <strong>linearly independent</strong>. Extends to $k$ distinct eigenvalues by induction.'
          }
        ]
      },
      { n:15, title:'Lecture 15 — The Characteristic Equation',
        learn:['Compute characteristic polynomial $\\det(A-\\lambda I)$.','Find all eigenvalues by solving $\\det(A-\\lambda I)=0$.','Algebraic vs geometric multiplicity.','Complex eigenvalues.'],
        theory:[
          { h:'Characteristic equation', b:'Eigenvalues = roots of $\\det(A-\\lambda I)=0$. Polynomial has degree $n$ for $n\\times n$ matrix.' },
          { h:'Multiplicities', b:'<strong>Algebraic</strong> = power of $(\\lambda-\\lambda_0)$ factor. <strong>Geometric</strong> = dim of eigenspace. Always $1 \\le$ geo $\\le$ alg.' },
          { h:'Complex eigenvalues', b:'Real matrices can have complex eigenvalues (in conjugate pairs). E.g., rotation matrices.' },
          { h:'Sanity identities', b:'Sum of eigenvalues = trace($A$). Product = $\\det(A)$.' }
        ],
        examples:[
          { q:'Find characteristic polynomial and eigenvalues of $A=\\begin{pmatrix}2&3\\\\3&-6\\end{pmatrix}$.',
            steps:['$\\det(A-\\lambda I)=(2-\\lambda)(-6-\\lambda)-9$','$=\\lambda^2+4\\lambda-21=(\\lambda+7)(\\lambda-3)=0$.','Check: sum $=-7+3=-4=$ trace ✓. Product $=-21=\\det A$ ✓.'],
            answer:'$\\lambda=-7,\\;3$.'
          },
          { q:'Find all eigenvalues of $A=\\begin{pmatrix}5&-2&6&-1\\\\0&3&-8&0\\\\0&0&5&4\\\\0&0&0&1\\end{pmatrix}$.',
            steps:['Upper triangular → diagonal.'],
            answer:'$\\lambda=1,3,5$ where $\\lambda=5$ has alg mult <strong>2</strong>.'
          },
          { q:'For $A$ from Lecture 14 Ex 3, char poly is $-(\\lambda-9)(\\lambda-2)^2$. Find geo mults; is $A$ diagonalizable?',
            steps:['$\\lambda=2$ (alg 2): eigenspace from earlier has 2 basis vectors → geo = 2.','$\\lambda=9$ (alg 1): 1D eigenspace → geo = 1.','Total LI eigenvectors: $2+1=3=n$.'],
            answer:'<strong>Diagonalizable.</strong>'
          },
          { q:'Show $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ (90° rotation) has no real eigenvalues.',
            steps:['$\\det(A-\\lambda I)=\\lambda^2+1=0$ → $\\lambda=\\pm i$.','Geometrically: 90° rotation sends every vector off its line.'],
            answer:'$\\lambda=\\pm i$ — purely imaginary. No real eigenvalues.'
          }
        ]
      },
      { n:16, title:'Lecture 16 — Diagonalization',
        learn:['Write $A=PDP^{-1}$.','Compute $A^k$ via $PD^kP^{-1}$.','Recognize non-diagonalizable (defective) matrices.'],
        theory:[
          { h:'Definition', b:'$A$ diagonalizable if $A=PDP^{-1}$ for invertible $P$ and diagonal $D$. Columns of $P$ = eigenvectors; diagonal of $D$ = matching eigenvalues.' },
          { h:'When diagonalizable', b:'$A$ ($n\\times n$) diagonalizable iff has $n$ LI eigenvectors, i.e., for every eigenvalue geo mult = alg mult.' },
          { h:'Sufficient condition', b:'$n$ distinct eigenvalues → automatically diagonalizable.' },
          { h:'Power formula', b:'$A^k=PD^kP^{-1}$. $D^k$ raises each diagonal entry to $k$. Massive speedup vs $k$ matrix multiplications.' }
        ],
        examples:[
          { q:'Diagonalize $A=\\begin{pmatrix}1&3&3\\\\-3&-5&-3\\\\3&3&1\\end{pmatrix}$. (Eigenvalues: $1,-2,-2$.)',
            steps:['$\\lambda=1$: solve $(A-I)\\mathbf{v}=\\mathbf{0}$ → $\\mathbf{v}_1=(1,-1,1)$.','$\\lambda=-2$ (alg 2): $A+2I$ all-3 rows; one equation $x_1+x_2+x_3=0$. Two free vars: $\\mathbf{v}_2=(-1,1,0)$, $\\mathbf{v}_3=(-1,0,1)$.','Geo mult of $-2$ = 2 = alg mult ✓. Total LI eigenvectors = 3.','$P=\\begin{pmatrix}1&-1&-1\\\\-1&1&0\\\\1&0&1\\end{pmatrix}$, $D=\\text{diag}(1,-2,-2)$.'],
            answer:'$A=PDP^{-1}$. <strong>Diagonalizable.</strong>'
          },
          { q:'Given $A=PDP^{-1}$ with $D=\\text{diag}(5,3)$. Compute $A^{10}$.',
            steps:['$A^{10}=PD^{10}P^{-1}$.','$D^{10}=\\text{diag}(5^{10},3^{10})=\\text{diag}(9{,}765{,}625,\\;59{,}049)$.','Multiply through.'],
            answer:'$A^{10}=P\\cdot\\text{diag}(5^{10},3^{10})\\cdot P^{-1}$. Cheap.'
          },
          { q:'Show $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ is NOT diagonalizable.',
            steps:['Triangular → $\\lambda=1$ with alg mult 2.','$A-I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$. Free var $x_1$. $\\mathbf{v}=t(1,0)$.','Only 1 LI eigenvector. Geo mult = 1 < alg mult = 2.'],
            answer:'<strong>Not diagonalizable</strong> — defective matrix. Classic exam trap.'
          },
          { q:'$3\\times 3$ matrix has char poly $-\\lambda(\\lambda-5)^2$. Eigenspaces have dim 1 each. Diagonalizable?',
            steps:['Total LI eigenvectors = $1+1=2$. Need 3.','$\\lambda=5$ defective (alg 2, geo 1).'],
            answer:'<strong>No.</strong>'
          }
        ]
      },
      { n:29, title:'Lecture 29 — ⭐ Markov Chains & Steady State',
        learn:['Recognize a stochastic matrix.','Set up Markov chain from a problem.','Find steady-state vector via $\\lambda=1$ eigenvector.','Predict long-run behavior.'],
        theory:[
          { h:'Setup', b:'Probability vector: nonneg entries summing to 1. Stochastic matrix $M$: each column is a probability vector.' },
          { h:'Dynamics', b:'$\\mathbf{x}_{t+1}=M\\mathbf{x}_t$. After $k$ steps: $\\mathbf{x}_k=M^k\\mathbf{x}_0$.' },
          { h:'Steady state', b:'$\\mathbf{p}$ steady state iff $M\\mathbf{p}=\\mathbf{p}$ AND $\\mathbf{p}$ is a probability vector. $\\mathbf{p}$ is the eigenvector for $\\lambda=1$, normalized.' },
          { h:'Why $\\lambda=1$ always works', b:'Stochastic matrices always have 1 as eigenvalue: columns of $M-I$ sum to 0, so $\\det(M-I)=0$.' },
          { h:'Regular chains', b:'If some $M^k$ has all entries $>0$, the chain is regular: unique steady state and $\\mathbf{x}_k\\to\\mathbf{p}$ regardless of $\\mathbf{x}_0$.' }
        ],
        examples:[
          { q:'<strong>Weather.</strong> Sunny→sunny 0.9, sunny→rainy 0.1, rainy→sunny 0.5, rainy→rainy 0.5. Long-run fraction sunny?',
            steps:['$M=\\begin{pmatrix}0.9&0.5\\\\0.1&0.5\\end{pmatrix}$. Columns sum to 1 ✓.','Solve $(M-I)\\mathbf{p}=\\mathbf{0}$: row 1 gives $p_1=5p_2$.','$p_1+p_2=1$ → $p_2=1/6$, $p_1=5/6$.'],
            answer:'<strong>5/6 ≈ 83.3% sunny</strong>, 1/6 rainy.'
          },
          { q:'<strong>Migration.</strong> 5% city→suburb, 95% stay city; 3% suburb→city, 97% stay. Equilibrium split?',
            steps:['$M=\\begin{pmatrix}0.95&0.03\\\\0.05&0.97\\end{pmatrix}$.','$(M-I)\\mathbf{p}=\\mathbf{0}$: $-0.05p_1+0.03p_2=0$ → $p_2=(5/3)p_1$.','$p_1+p_2=1$ → $p_1=3/8,\\;p_2=5/8$.'],
            answer:'<strong>37.5% city, 62.5% suburbs.</strong>'
          },
          { q:'Verify $\\lambda=1$ is always an eigenvalue of $2\\times 2$ stochastic $M=\\begin{pmatrix}a&c\\\\1-a&1-c\\end{pmatrix}$.',
            steps:['$M-I=\\begin{pmatrix}a-1&c\\\\1-a&-c\\end{pmatrix}$.','$\\det(M-I)=(a-1)(-c)-c(1-a)=-c(a-1)+c(a-1)=0$.'],
            answer:'$\\det(M-I)=0$ ⇒ $\\lambda=1$ is always an eigenvalue.'
          },
          { q:'$M=\\begin{pmatrix}0.5&0.2&0.3\\\\0.3&0.8&0.3\\\\0.2&0&0.4\\end{pmatrix}$. Long-run distribution from $\\mathbf{x}_0=(1,0,0)^T$?',
            steps:['Solve $(M-I)\\mathbf{p}=\\mathbf{0}$ with $\\Sigma p_i=1$.','Row 3: $0.2p_1=0.6p_3$ → $p_1=3p_3$.','Row 1: $-1.5p_3+0.2p_2+0.3p_3=0$ → $p_2=6p_3$.','Normalize: $3p_3+6p_3+p_3=1$ → $p_3=1/10$.'],
            answer:'$\\mathbf{p}=(0.3,\\;0.6,\\;0.1)$. Initial state doesn\'t matter.'
          },
          { q:'<strong>Conceptual:</strong> Why must columns of stochastic $M$ sum to 1, not rows?',
            steps:['Column $j$ = transition probabilities OUT of state $j$ to all states.','From state $j$ you MUST go somewhere → sum = 1.','(Some texts use row-stochastic, $\\mathbf{x}_{t+1}=\\mathbf{x}_t M$. Lay uses column-stochastic.)'],
            answer:'Columns sum to 1 because the next-step distribution must be a proper probability vector.'
          }
        ]
      }
    ]
  },
  lp: { title:'Linear Programming', intro:'Coming in v4 — see Cheat Sheet + Flashcards.', lectures:[] },
  transassign: { title:'Transportation & Assignment', intro:'Coming in v4 — see Cheat Sheet + Flashcards.', lectures:[] }
};

const FLASHCARDS = [
  { t:'systems', q:'Difference between REF and RREF?', a:'REF: nonzero rows above zero rows, leading entries shift right, zeros below. RREF adds: leading entries = 1 and each leading 1 is only nonzero in its column.' },
  { t:'systems', q:'When is a linear system inconsistent?', a:'Row reads [0…0 | b] with b ≠ 0.' },
  { t:'systems', q:'Consistent + free vars → solutions?', a:'Infinitely many.' },
  { t:'systems', q:'Translate Ax=b into vector eq.', a:'x₁a₁ + … + xₙaₙ = b. Or: b ∈ Span{columns of A}.' },
  { t:'systems', q:'Ax=0 has only trivial solution when?', a:'When A has pivot in every column.' },
  { t:'systems', q:'Three row operations?', a:'Replacement, swap, scale by nonzero.' },
  { t:'indep', q:'Define linear independence.', a:'{v₁,…,vₚ} independent iff c₁v₁+…+cₚvₚ = 0 only when all cᵢ = 0.' },
  { t:'indep', q:'5 vectors in ℝ³ — dep or indep?', a:'Dependent. p > n forces dependence.' },
  { t:'indep', q:'Two vectors dependent — geometric meaning?', a:'One is a scalar multiple of the other.' },
  { t:'indep', q:'Standard matrix of T: ℝⁿ → ℝᵐ?', a:'A = [T(e₁) … T(eₙ)].' },
  { t:'indep', q:'When is T one-to-one?', a:'Columns of A independent.' },
  { t:'indep', q:'When is T onto?', a:'Columns of A span ℝᵐ (pivot in every row).' },
  { t:'matrix', q:'When is AB defined?', a:'When #cols(A) = #rows(B).' },
  { t:'matrix', q:'Matrix mult commutative?', a:'No. AB ≠ BA in general.' },
  { t:'matrix', q:'2×2 inverse formula?', a:'A=[[a,b],[c,d]] → A⁻¹ = (1/(ad−bc))·[[d,−b],[−c,a]].' },
  { t:'matrix', q:'Compute A⁻¹ generally?', a:'Form [A | I], row-reduce to [I | A⁻¹].' },
  { t:'matrix', q:'(AB)⁻¹ = ?', a:'B⁻¹A⁻¹.' },
  { t:'matrix', q:'(AB)ᵀ = ?', a:'BᵀAᵀ.' },
  { t:'matrix', q:'5 equivalences for A invertible?', a:'Row-reduces to I; n pivots; Ax=0 only trivial; columns independent; det ≠ 0.' },
  { t:'det', q:'det 2×2 [[a,b],[c,d]]?', a:'ad − bc.' },
  { t:'det', q:'Row op effects on det?', a:'Replacement: unchanged. Swap: ×(−1). Scale by k: ×k.' },
  { t:'det', q:'det(AB) = ?', a:'det(A)·det(B).' },
  { t:'det', q:'det(kA) for n×n?', a:'kⁿ·det(A).' },
  { t:'det', q:'det of triangular?', a:'Product of diagonal entries.' },
  { t:'det', q:'Cramer\'s Rule?', a:'xᵢ = det(Aᵢ)/det(A), Aᵢ replaces col i with b.' },
  { t:'eigen', q:'Eigenvalue / eigenvector def?', a:'v ≠ 0, Av = λv.' },
  { t:'eigen', q:'How to find eigenvalues?', a:'Solve det(A − λI) = 0.' },
  { t:'eigen', q:'How to find eigenvectors for known λ?', a:'Row-reduce (A − λI), find null space basis.' },
  { t:'eigen', q:'Eigenvalues of triangular?', a:'Diagonal entries.' },
  { t:'eigen', q:'Sum / product of eigenvalues?', a:'Sum = trace. Product = det.' },
  { t:'eigen', q:'When diagonalizable?', a:'iff n LI eigenvectors. Or: for every eigenvalue, geo mult = alg mult.' },
  { t:'eigen', q:'3×3 with 3 distinct eigenvalues — diag?', a:'Yes always.' },
  { t:'eigen', q:'0 as eigenvalue — meaning?', a:'⇔ det A = 0 ⇔ A is singular.' },
  { t:'eigen', q:'Why $A^k$ easy when diagonalized?', a:'A^k = PD^kP⁻¹. Just raise diagonal entries to k.' },
  { t:'eigen', q:'Markov steady-state vector?', a:'Solve (M − I)p = 0 with Σpᵢ = 1. Eigenvector for λ = 1.' },
  { t:'eigen', q:'Stochastic matrix — columns sum to?', a:'1 (each column is a probability vector).' },
  { t:'eigen', q:'Regular Markov chain?', a:'Some power Mᵏ has all entries > 0. Then unique steady state, xₖ → p regardless of x₀.' },
  { t:'lp', q:'Fundamental Theorem of LP?', a:'If LP has an optimum, at least one is at a CORNER of feasible region.' },
  { t:'lp', q:'Slack variable = 0 means?', a:'Constraint is BINDING — optimum lies on it.' },
  { t:'lp', q:'Simplex entering variable (max)?', a:'Most NEGATIVE Cⱼ − Zⱼ.' },
  { t:'lp', q:'Simplex leaving variable?', a:'Min non-neg ratio bᵢ/aᵢⱼ. Ignore aᵢⱼ ≤ 0 rows.' },
  { t:'lp', q:'Optimal tableau (max)?', a:'All Cⱼ − Zⱼ ≥ 0.' },
  { t:'lp', q:'Simplex UNBOUNDED when?', a:'Entering column all ≤ 0 → no leaving row.' },
  { t:'lp', q:'≤ constraint needs?', a:'Slack ≥ 0. (≥ needs surplus minus artificial; = needs artificial.)' },
  { t:'lp', q:'Dual of max cᵀx s.t. Ax ≤ b?', a:'min bᵀy s.t. Aᵀy ≥ c, y ≥ 0.' },
  { t:'lp', q:'Strong Duality?', a:'Primal & dual optimal values are equal.' },
  { t:'transassign', q:'Balanced transportation?', a:'Σsupply = Σdemand. Else add dummy row/col, zero cost.' },
  { t:'transassign', q:'Three initial BFS methods?', a:'North-West Corner; Least Cost; VAM (best).' },
  { t:'transassign', q:'VAM penalty?', a:'(2nd smallest − smallest cost) per row/col. Allocate to cheapest of largest-penalty.' },
  { t:'transassign', q:'MODI: uᵢ + vⱼ for which cells?', a:'BASIC (allocated) cells only. Set u₁ = 0.' },
  { t:'transassign', q:'MODI optimality?', a:'All Δᵢⱼ = cᵢⱼ − (uᵢ+vⱼ) ≥ 0 for non-basic cells.' },
  { t:'transassign', q:'Degeneracy in transportation?', a:'Basic cells < m + n − 1. Insert ε in a cell to maintain count.' },
  { t:'transassign', q:'Assignment vs transportation?', a:'Special case: supply = demand = 1.' },
  { t:'transassign', q:'Hungarian Method core?', a:'1. Subtract row min. 2. Subtract col min. 3. Cover zeros with min lines. 4. Lines = n → done.' }
];

const QUIZ = [
  { t:'systems', q:'4×6 augmented in RREF, pivots cols 1, 2, 4. Free variables?', o:['1','2','3','4'], c:1, e:'Cols 3, 5 free (col 6 = constants).' },
  { t:'systems', q:'Row op that does NOT change solution set?', o:['Add multiple to another','Swap','Multiply by 0','Multiply by nonzero'], c:2, e:'×0 destroys info.' },
  { t:'systems', q:'Ax=b consistent for every b ∈ ℝᵐ means A has...', o:['square','pivot every row','pivot every column','invertible'], c:1, e:'Columns span ℝᵐ.' },
  { t:'systems', q:'Homogeneous system always has...', o:['Zero','One trivial','At least trivial','Infinite'], c:2, e:'x=0 always.' },
  { t:'systems', q:'Inconsistency signal?', o:['All-zero row','Fewer pivots','[0 0 0 | 5]','Free variable'], c:2, e:'0 = 5.' },
  { t:'indep', q:'6 vectors in ℝ⁴?', o:['Independent','Dependent','Need info','Sometimes'], c:1, e:'p > n.' },
  { t:'indep', q:'{v₁, v₂, 0} is...', o:['Independent','Dependent','Either','Invalid'], c:1, e:'Contains zero vector.' },
  { t:'indep', q:'T: ℝ³ → ℝ² standard matrix size?', o:['3×2','2×3','3×3','2×2'], c:1, e:'m×n.' },
  { t:'indep', q:'T one-to-one iff columns of A are...', o:['dependent','span ℝᵐ','independent','orthogonal'], c:2, e:'Ax=0 only trivial.' },
  { t:'indep', q:'T onto iff A has...', o:['pivot every row','pivot every column','more rows','no zero cols'], c:0, e:'Columns span ℝᵐ.' },
  { t:'matrix', q:'A is 3×4, B is 4×2. Size of AB?', o:['3×2','4×4','3×4','undefined'], c:0, e:'(rows A)×(cols B).' },
  { t:'matrix', q:'(AB)ᵀ = ?', o:['AᵀBᵀ','BᵀAᵀ','Only if square','Only if commute'], c:1, e:'Reverses order.' },
  { t:'matrix', q:'A=[[2,1],[3,4]]: det and A⁻¹?', o:['det=5, (1/5)[[4,−1],[−3,2]]','det=11','det=5, (1/5)[[4,−3],[−1,2]]','det=−5'], c:0, e:'det=8−3=5.' },
  { t:'matrix', q:'NOT equivalent to A invertible:', o:['det ≠ 0','Ax=0 only trivial','Columns dependent','n pivots'], c:2, e:'Invertible ⇔ INDEPENDENT.' },
  { t:'matrix', q:'(3A)⁻¹ = ?', o:['3 A⁻¹','(1/3) A⁻¹','A⁻¹/9','(1/3) Aᵀ'], c:1, e:'(cA)⁻¹ = (1/c) A⁻¹.' },
  { t:'det', q:'det[[1,2,3],[0,4,5],[0,0,6]] = ?', o:['6','24','30','42'], c:1, e:'1·4·6.' },
  { t:'det', q:'Swap two rows — det?', o:['Unchanged','×0','×(−1)','Doubled'], c:2, e:'Flips sign.' },
  { t:'det', q:'For 3×3 A, det(2A)?', o:['2 det A','4 det A','6 det A','8 det A'], c:3, e:'2³ = 8.' },
  { t:'det', q:'4×4 det A = 3. det(A⁻¹)?', o:['3','−3','1/3','9'], c:2, e:'1/det.' },
  { t:'det', q:'A singular iff?', o:['det > 0','det < 0','det = 0','det = 1'], c:2, e:'Definition.' },
  { t:'det', q:'det(AB) = ?', o:['det A · det B','det A + det B','|det A − det B|','only if A=B'], c:0, e:'Product rule.' },
  { t:'eigen', q:'A=[[3,0],[1,2]]. Eigenvalues?', o:['3 and 2','3 and 1','2 and 1','5 and 5'], c:0, e:'Triangular.' },
  { t:'eigen', q:'For A above, eigenvector for λ=2?', o:['(0,1)','(1,0)','(1,1)','(1,−1)'], c:0, e:'x₁=0 free x₂.' },
  { t:'eigen', q:'3×3 eigenvalues 1,1,4 (alg). Diagonalizable iff?', o:['mult of 4 is 2','eigenspace of 1 has dim 2','dim 1','always'], c:1, e:'Geo = alg.' },
  { t:'eigen', q:'Sum of eigenvalues?', o:['det A','trace A','rank A','number'], c:1, e:'Trace.' },
  { t:'eigen', q:'A invertible iff?', o:['all eigenvalues positive','0 NOT an eigenvalue','all distinct','diagonalizable'], c:1, e:'det ≠ 0.' },
  { t:'eigen', q:'A=PDP⁻¹ with D=diag(2,3). A¹⁰?', o:['P diag(2¹⁰,3¹⁰) P⁻¹','P¹⁰D¹⁰P⁻¹⁰','D¹⁰','diag(2¹⁰,3¹⁰)'], c:0, e:'Aᵏ = PDᵏP⁻¹.' },
  { t:'eigen', q:'Markov steady-state p satisfies?', o:['Mp=0','(M−I)p=0 and Σpᵢ=1','p=0','Mp=2p'], c:1, e:'Eigenvector for λ=1.' },
  { t:'lp', q:'Graphical LP optimum (unique) at...', o:['centroid','corner','any boundary','origin'], c:1, e:'Fundamental theorem.' },
  { t:'lp', q:'Simplex entering variable (max)?', o:['largest positive Cⱼ−Zⱼ','most negative Cⱼ−Zⱼ','smallest ratio','largest obj coeff'], c:1, e:'Most negative improves fastest.' },
  { t:'lp', q:'Min-ratio test: rows with aᵢⱼ ≤ 0?', o:['Use abs','Ignore','Use negative','Optimality'], c:1, e:'Ignore.' },
  { t:'lp', q:'Simplex UNBOUNDED when?', o:['All Cⱼ−Zⱼ ≥ 0','Entering col all ≤ 0','Tableau stuck','Artificial in basis'], c:1, e:'No leaving row.' },
  { t:'lp', q:'≤ constraint needs?', o:['surplus','artificial','slack','dummy'], c:2, e:'Slack ≥ 0.' },
  { t:'lp', q:'Primal max 2 vars 2 constraints. Dual?', o:['2 vars, 2 constraints, min','2,2,max','3,3,min','1,1'], c:0, e:'Swap.' },
  { t:'lp', q:'Strong Duality?', o:['Primal ≥ dual','Primal = dual at optimum','Iff dual solvable','Sanity check'], c:1, e:'Equal optimum values.' },
  { t:'transassign', q:'Supply 60, demand 50. Balance:', o:['Dummy demand 10','Dummy supply 10','Scale','Infeasible'], c:0, e:'Excess supply → dummy dest.' },
  { t:'transassign', q:'Lowest-cost starting method?', o:['NWC','Least Cost','VAM','Random'], c:2, e:'VAM uses opportunity costs.' },
  { t:'transassign', q:'MODI: u₁=0, then?', o:['cᵢⱼ = uᵢ − vⱼ non-basic','cᵢⱼ = uᵢ + vⱼ basic','min cⱼᵢ','dual of LP'], c:1, e:'Basic cells.' },
  { t:'transassign', q:'MODI optimal when?', o:['All Δ ≥ 0 non-basic','All cᵢⱼ = 0','All Δ = 0 basic','Table square'], c:0, e:'No shift reduces cost.' },
  { t:'transassign', q:'4-worker Hungarian optimal: lines = ?', o:['4','rank','any zero row','col min'], c:0, e:'Lines = n.' },
  { t:'transassign', q:'Hungarian after row-min: subtract column...', o:['max','mean','min','first'], c:2, e:'Column min.' }
];

const MOCK = [
  { t:'systems', q:'3×5 augmented in RREF, pivots cols 1, 2, 4. Solution?', o:['Inconsistent','Unique','Infinite, 1 free','Infinite, 2 free'], c:2, e:'3 of 4 var cols have pivots.' },
  { t:'systems', q:'v₁=(1,2,0), v₂=(2,4,0), v₃=(0,1,1). Independent?', o:['Yes','No, v₂=2v₁','No, zero vector','Cannot tell'], c:1, e:'v₂ = 2v₁.' },
  { t:'matrix', q:'A=[[1,2],[3,4]], B=[[2,0],[1,2]]. AB?', o:['[[4,4],[10,8]]','[[2,4],[3,8]]','[[3,2],[4,6]]','[[5,4],[11,8]]'], c:0, e:'Row 1: (4,4). Row 2: (10,8).' },
  { t:'matrix', q:'For what k is [[k,2],[3,1]] singular?', o:['0','2/3','6','3'], c:2, e:'k−6=0.' },
  { t:'eigen', q:'Eigenvalues of A=[[4,1],[2,3]]?', o:['5 and 2','2 and 5','1 and 6','3 and 4'], c:0, e:'(λ−5)(λ−2).' },
  { t:'eigen', q:'Eigenvector for λ=5 of A=[[4,1],[2,3]]?', o:['(1,1)','(1,−1)','(2,1)','(1,2)'], c:0, e:'−x+y=0.' },
  { t:'eigen', q:'3×3 char poly −(λ−1)²(λ−4). λ=1 eigenspace dim 1. Diag?', o:['Yes','No','Iff det≠0','Cannot tell'], c:1, e:'Alg 2 ≠ geo 1.' },
  { t:'eigen', q:'Markov M=[[0.9,0.5],[0.1,0.5]]. Steady state?', o:['(0.5, 0.5)','(5/6, 1/6)','(0.9, 0.1)','(1, 0)'], c:1, e:'p₁=5p₂ and Σ=1.' },
  { t:'lp', q:'Max Z=3x+5y s.t. x≤4, 2y≤12, 3x+2y≤18, x,y≥0. Optimal corner?', o:['(0,0)','(4,0)','(2,6)','(4,3)'], c:2, e:'Z(2,6)=36.' },
  { t:'lp', q:'Above optimal Z?', o:['27','30','36','40'], c:2, e:'3(2)+5(6)=36.' },
  { t:'lp', q:'2x₁+x₂ ≥ 10 to standard form?', o:['+s₁ = 10','−s₁ = 10','−s₁ + a₁ = 10','+s₁+a₁ = 10'], c:2, e:'≥ subtracts surplus, adds artificial.' },
  { t:'lp', q:'Cⱼ−Zⱼ=(0,−2,0,4,0), entering col ≤ 0. Conclusion?', o:['Optimal','Unbounded','Degeneracy','Iterate'], c:1, e:'No leaving row.' },
  { t:'transassign', q:'Supplies (20,30,25), demands (10,35,30). Balanced?', o:['Yes','Dummy demand','Dummy supply','Infeasible'], c:0, e:'75 = 75.' },
  { t:'transassign', q:'4×4 Hungarian, min lines=3. Next?', o:['Optimal','Subtract smallest uncovered','Restart','Swap'], c:1, e:'Adjustment step.' },
  { t:'transassign', q:'MODI: Δ₂₃=−5, Δ₁₄=−2 (others ≥ 0). Enters?', o:['(2,3)','(1,4)','Both','Optimal'], c:0, e:'Most negative Δ.' }
];

const BADGES = [
  { id:'first_quiz', name:'First Quiz', icon:'🎯', desc:'Take your first quiz' },
  { id:'first_flash', name:'Flash Starter', icon:'⚡', desc:'Review your first flashcard' },
  { id:'first_topic', name:'Topic Tackler', icon:'📘', desc:'Mark a lecture as Studied' },
  { id:'topic_master', name:'Topic Master', icon:'🌟', desc:'Master an entire topic cluster' },
  { id:'streak_3', name:'On Fire', icon:'🔥', desc:'3-day streak' },
  { id:'streak_5', name:'Inferno', icon:'🔥🔥', desc:'5-day streak' },
  { id:'quiz_perfect', name:'Perfectionist', icon:'💯', desc:'100% on a quiz (5+ Q)' },
  { id:'eigenking', name:'Eigenking', icon:'👑', desc:'90%+ on Eigen quizzes' },
  { id:'simplex_sniper', name:'Simplex Sniper', icon:'🎯', desc:'90%+ on LP quizzes' },
  { id:'mock_done', name:'Battle Tested', icon:'⚔️', desc:'Complete any mock' },
  { id:'mock_pass', name:'Mock Champion', icon:'🏅', desc:'70%+ on full mock' },
  { id:'all_mastered', name:'BMLA Champion', icon:'👑', desc:'Master all 7 topic clusters' }
];

const LEVELS = [
  { name:'Novice', min:0, next:100 },
  { name:'Apprentice', min:100, next:300 },
  { name:'Scholar', min:300, next:700 },
  { name:'Expert', min:700, next:1500 },
  { name:'Master', min:1500, next:3000 },
  { name:'BMLA Champion', min:3000, next:99999 }
];

const STATUS_FLOW = ['not-started','studying','revised','mastered'];
const STATUS_LABEL = { 'not-started':'Not started', 'studying':'Studying', 'revised':'Revised', 'mastered':'Mastered ⭐' };
