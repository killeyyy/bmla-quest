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

const FINAL_INDEX = [
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.1', title:'Systems of Linear Equations', page:'2', lecture:1, topic:'systems', priority:'High', file:'LA_Summary_chap1, Lec1Modified' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.2', title:'Row Reduction and Echelon Forms', page:'14', lecture:2, topic:'systems', priority:'High', file:'ref_rref_elimination_method' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.3', title:'Vector Equations', page:'28', lecture:3, topic:'systems', priority:'Medium', file:'Linear_combination_Span' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.4', title:'The Matrix Equation Ax = b', page:'40', lecture:4, topic:'systems', priority:'Medium', file:'practice_problems_1.4' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.5', title:'Solution Sets of Linear Systems', page:'50', lecture:5, topic:'systems', priority:'Medium', file:'practice_problems_1.5, Solution_set_and_Linear_Dependence' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.6', title:'Applications of Linear Systems', page:'57', lecture:5, topic:'systems', priority:'Medium', file:'Assignment 1, class applications' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.7', title:'Linear Independence', page:'65', lecture:6, topic:'indep', priority:'Medium', file:'practice_problems_1.7' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.8', title:'Introduction to Linear Transformations', page:'73', lecture:7, topic:'indep', priority:'Medium', file:'Linear_Transformations' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.9', title:'The Matrix of a Linear Transformation', page:'82', lecture:8, topic:'indep', priority:'Medium', file:'practice_problems_1.9' },
  { book:'Lay', chapter:'Chapter 1', chapterTitle:'Linear Equations in Linear Algebra', section:'1.10', title:'Linear Models in Business, Science, and Engineering', page:'92', lecture:8, topic:'indep', priority:'Low', file:'course outline applications' },
  { book:'Lay', chapter:'Chapter 2', chapterTitle:'Matrix Algebra', section:'2.1', title:'Matrix Operations', page:'107', lecture:9, topic:'matrix', priority:'Medium', file:'chap2_practice_problem' },
  { book:'Lay', chapter:'Chapter 2', chapterTitle:'Matrix Algebra', section:'2.2', title:'The Inverse of a Matrix', page:'118', lecture:10, topic:'matrix', priority:'High', file:'Invertible_Matrices_Characterization' },
  { book:'Lay', chapter:'Chapter 2', chapterTitle:'Matrix Algebra', section:'2.3', title:'Characterizations of Invertible Matrices', page:'128', lecture:11, topic:'matrix', priority:'High', file:'Invertible_Matrices_Characterization' },
  { book:'Lay', chapter:'Chapter 3', chapterTitle:'Determinants', section:'3.1', title:'Introduction to Determinants', page:'186', lecture:12, topic:'det', priority:'Medium', file:'Determinants, chap3_practice_problem' },
  { book:'Lay', chapter:'Chapter 3', chapterTitle:'Determinants', section:'3.2', title:'Properties of Determinants', page:'192', lecture:13, topic:'det', priority:'High', file:'Determinants' },
  { book:'Lay', chapter:'Chapter 3', chapterTitle:'Determinants', section:'3.3', title:"Cramer's Rule, Volume, and Linear Transformations", page:'201', lecture:13, topic:'det', priority:'Medium', file:'Determinants' },
  { book:'Lay', chapter:'Chapter 5', chapterTitle:'Eigenvalues and Eigenvectors', section:'5.1', title:'Eigenvectors and Eigenvalues', page:'302', lecture:14, topic:'eigen', priority:'High', file:'Chap5_Lectures_notes' },
  { book:'Lay', chapter:'Chapter 5', chapterTitle:'Eigenvalues and Eigenvectors', section:'5.2', title:'The Characteristic Equation', page:'310', lecture:15, topic:'eigen', priority:'High', file:'Chap5_Lectures_notes' },
  { book:'Lay', chapter:'Chapter 5', chapterTitle:'Eigenvalues and Eigenvectors', section:'5.3', title:'Diagonalization', page:'319', lecture:16, topic:'eigen', priority:'High', file:'Ch5_Diagonalization' },
  { book:'Class', chapter:'Eigen/Markov Add-on', chapterTitle:'Markov Chains and Steady State', section:'Markov', title:'Steady State via Eigenvalue 1', page:'Course notes', lecture:29, topic:'eigen', priority:'High', file:'Chap5_Lectures_notes, Normalized Nerd Markov' },
  { book:'Budnick', chapter:'Chapter 10', chapterTitle:'Linear Programming: An Introduction', section:'10.1', title:'Linear Programming', page:'422', lecture:17, topic:'lp', priority:'High', file:'LP_graphical_method, Lec1Modified' },
  { book:'Budnick', chapter:'Chapter 10', chapterTitle:'Linear Programming: An Introduction', section:'10.2', title:'Graphical Solutions', page:'424', lecture:18, topic:'lp', priority:'High', file:'LP_graphical_method, Linear_Programming_Graphical_Method' },
  { book:'Budnick', chapter:'Chapter 10', chapterTitle:'Linear Programming: An Introduction', section:'10.3', title:'Applications of Linear Programming', page:'441', lecture:19, topic:'lp', priority:'Medium', file:'Applications' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.1', title:'Simplex Preliminaries', page:'464', lecture:20, topic:'lp', priority:'High', file:'Simplex_Method_1, Simplex_Class_Notes' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.2', title:'The Simplex Method', page:'477', lecture:21, topic:'lp', priority:'High', file:'Simplex_Method_2, simplex_solution' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.3', title:'Special Phenomena', page:'496', lecture:21, topic:'lp', priority:'Medium', file:'Simplex_Method_2, class notes' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.4', title:'Computer Solution Methods', page:'502', lecture:22, topic:'lp', priority:'Low', file:'Course outline lecture 22' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.5', title:'The Dual Problem', page:'510', lecture:23, topic:'lp', priority:'Medium', file:'Linear_and_Nonlinear_Programming_Luenberger' },
  { book:'Budnick', chapter:'Chapter 11', chapterTitle:'The Simplex and Computer Solution Methods', section:'11.5+', title:'The Dual Problem Continued', page:'510', lecture:24, topic:'lp', priority:'Medium', file:'Linear_and_Nonlinear_Programming_Luenberger' },
  { book:'Budnick', chapter:'Chapter 12', chapterTitle:'Transportation and Assignment Models', section:'12.1', title:'The Transportation Model', page:'524', lecture:25, topic:'transassign', priority:'High', file:'Transportation_Problem' },
  { book:'Budnick', chapter:'Chapter 12', chapterTitle:'Transportation and Assignment Models', section:'12.2', title:'Solutions to Transportation Models', page:'528', lecture:26, topic:'transassign', priority:'High', file:'Transportation_Problem_Class_Notes' },
  { book:'Budnick', chapter:'Chapter 12', chapterTitle:'Transportation and Assignment Models', section:'12.3', title:'The Assignment Model and Methods of Solution', page:'543', lecture:27, topic:'transassign', priority:'High', file:'course notes, Hungarian method videos' },
  { book:'Budnick', chapter:'Chapter 12', chapterTitle:'Transportation and Assignment Models', section:'12.3+', title:'The Hungarian Method', page:'546', lecture:28, topic:'transassign', priority:'High', file:'course notes, Joshua Emmanuel Hungarian' }
];

const PAST_PAPERS = [
  {
    id:'midterm-2026-q1', paper:'BMLA Midterm Spring 2026', qn:1, marks:4, topic:'systems',
    title:'Consistency with arbitrary parameters',
    prompt:'Given $2x_1-4x_2-2x_3=b_1$, $-5x_1+x_2+x_3=b_2$, and $7x_1-5x_2-3x_3=b_3$: (a) determine whether the system is consistent for all arbitrary $b_1,b_2,b_3$; if not, state the condition. (b) Replace the third equation by $x_1+x_2+x_3=b_3$ and decide whether the new system is consistent for all arbitrary values.',
    steps:[
      'Use the augmented matrix and row-reduce the coefficient part.',
      'For part (a), the coefficient matrix has only two pivots, so one condition on $b$ remains.',
      'The final zero row gives the consistency condition $-b_1+b_2+b_3=0$.',
      'For part (b), the modified coefficient matrix has a pivot in every row.',
      'A pivot in every row means every right-hand side is allowed.'
    ],
    answer:'Part (a): not consistent for all $b$; it is consistent only when $b_1=b_2+b_3$. Part (b): consistent for all arbitrary $b_1,b_2,b_3$.'
  },
  {
    id:'midterm-2026-q2', paper:'BMLA Midterm Spring 2026', qn:2, marks:4, topic:'systems',
    title:'Span and linear combination in R3',
    prompt:'Let $v_1=(1,0,-2)^T$, $v_2=(-3,1,8)^T$, and $y=(h,-5,-3)^T$. (a) Find $h$ so that $y$ lies in $Span\\{v_1,v_2\\}$. (b) If $h=0$, decide whether $y$ can be expressed as a linear combination of $v_1,v_2$ and whether $\\{v_1,v_2,y\\}$ spans $\\mathbb R^3$.',
    steps:[
      'Set $y=c_1v_1+c_2v_2$.',
      'From the second coordinate, $c_2=-5$.',
      'From the third coordinate, $-2c_1+8(-5)=-3$, so $c_1=-37/2$.',
      'Then the first coordinate gives $h=c_1-3c_2=-37/2+15=-7/2$.',
      'If $h=0$, the vector is not in the span of $v_1,v_2$; adding it to two independent vectors gives three independent vectors in $\\mathbb R^3$.'
    ],
    answer:'$h=-7/2$. For $h=0$, $y$ is not a linear combination of $v_1,v_2$, and $\\{v_1,v_2,y\\}$ spans $\\mathbb R^3$.'
  },
  {
    id:'midterm-2026-q3', paper:'BMLA Midterm Spring 2026', qn:3, marks:4, topic:'indep',
    title:'Linear transformations and standard matrices',
    prompt:'(a) Determine whether $T:\\mathbb R^3\\to\\mathbb R^2$, $T(x_1,x_2,x_3)=(x_1-|x_2|,2x_2+x_3)$ is linear. (b) For $T:\\mathbb R^2\\to\\mathbb R^3$, $T(x_1,x_2)=(x_1-2x_2,-x_1+3x_2,3x_1-2x_2)$, find $(x_1,x_2)$ such that $T(x_1,x_2)=(-1,4,9)$. (c) Find the standard matrix of the horizontal shear mapping $e_2$ to $e_2+3e_1$ while leaving $e_1$ unchanged.',
    steps:[
      'Part (a): absolute value usually breaks linearity. Test additivity with $u=(0,1,0)$ and $v=(0,-1,0)$.',
      '$T(u)+T(v)=(-1,2)+(-1,-2)=(-2,0)$ but $T(u+v)=T(0,0,0)=(0,0)$.',
      'Part (b): solve $x_1-2x_2=-1$, $-x_1+3x_2=4$, $3x_1-2x_2=9$.',
      'The first two equations give $x_2=3$ and $x_1=5$, which satisfies the third equation.',
      'Part (c): the standard matrix is $[T(e_1)\\;T(e_2)]$.'
    ],
    answer:'(a) Not linear. (b) $(x_1,x_2)=(5,3)$. (c) $A=\\begin{bmatrix}1&3\\\\0&1\\end{bmatrix}$.'
  },
  {
    id:'midterm-2026-q4', paper:'BMLA Midterm Spring 2026', qn:4, marks:4, topic:'matrix',
    title:'Elementary matrices',
    prompt:'(a) Given $A=\\begin{bmatrix}3&4&1\\\\2&-7&-1\\\\8&1&5\\end{bmatrix}$, $B=\\begin{bmatrix}8&1&5\\\\2&-7&-1\\\\3&4&1\\end{bmatrix}$, and $C=\\begin{bmatrix}3&4&1\\\\2&-7&-1\\\\2&-7&3\\end{bmatrix}$, find elementary matrices $E_1,E_2$ such that $E_1A=B$ and $E_2A=C$. (b) For $A=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\a&b&c\\end{bmatrix}$ nonsingular, state all conditions on $a,b,c$ for which $A$ is elementary.',
    steps:[
      'Left multiplication by an elementary matrix performs the same row operation on $A$.',
      '$B$ is obtained by swapping rows 1 and 3 of $A$.',
      '$C$ is obtained by $R_3\\leftarrow R_3-2R_1$.',
      'For part (b), the matrix must be obtainable from $I_3$ by one elementary row operation and also be nonsingular.',
      'That allows one row replacement in row 3, or one scaling of row 3 by a nonzero scalar.'
    ],
    answer:'$E_1=\\begin{bmatrix}0&0&1\\\\0&1&0\\\\1&0&0\\end{bmatrix}$ and $E_2=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\-2&0&1\\end{bmatrix}$. For part (b): either $c=1$ with at most one of $a,b$ nonzero, or $a=b=0$ with $c\\ne0$ and $c\\ne1$.'
  },
  {
    id:'midterm-2026-q5', paper:'BMLA Midterm Spring 2026', qn:5, marks:4, topic:'matrix',
    title:'Invertibility and inverse transformation',
    prompt:'(a) Prove or disprove that $A=\\begin{bmatrix}1&6&4\\\\2&4&-1\\\\-1&2&5\\end{bmatrix}$ is invertible. Using this result, decide whether the homogeneous system $Ax=0$ has nontrivial solutions. (b) Let $T(x_1,x_2)=(6x_1-8x_2,-5x_1+7x_2)$. Show that $T$ is invertible and find $T^{-1}$.',
    steps:[
      'For part (a), row-reduce $A$.',
      'The echelon form has only two pivot rows, so $A$ is singular and not invertible.',
      'A singular matrix means $Ax=0$ has nontrivial solutions.',
      'Solving the reduced system gives a direction vector $(22,-9,8)^T$.',
      'For part (b), the standard matrix is $\\begin{bmatrix}6&-8\\\\-5&7\\end{bmatrix}$ with determinant $42-40=2\\ne0$.'
    ],
    answer:'$A$ is not invertible, and $Ax=0$ has nontrivial solutions $x=t(22,-9,8)^T$. Also $T^{-1}(y_1,y_2)=(\\frac72y_1+4y_2,\\frac52y_1+3y_2)$.'
  },
  {
    id:'midterm-2026-q6', paper:'BMLA Midterm Spring 2026', qn:6, marks:4, topic:'det',
    title:'Determinants and triangular inverse',
    prompt:'(a) Convert $A=\\begin{bmatrix}1&0&5&1\\\\5&6&0&7\\\\4&0&1&0\\\\-1&2&2&1\\end{bmatrix}$ into echelon form using row interchange and row replacement only. Find $\\det(A)$ without cofactor expansion and state determinant properties used. (b) For $B=\\begin{bmatrix}a&b&c\\\\0&e&f\\\\0&0&g\\end{bmatrix}$, find $B^{-1}$ when nonsingular and state when $B$ is singular.',
    steps:[
      'Use row replacements to create zeros below pivots. Row replacement does not change the determinant.',
      'One row interchange is used, so the determinant changes sign once.',
      'After echelon form, multiply diagonal entries and adjust for the row swap.',
      'For part (b), an upper triangular matrix is nonsingular exactly when every diagonal entry is nonzero.',
      'Row-reduce $[B|I]$ or use back substitution to obtain the inverse.'
    ],
    answer:'$\\det(A)=216$. For $B$, singular when $aeg=0$. If $aeg\\ne0$, $B^{-1}=\\begin{bmatrix}1/a&-b/(ae)&(bf-ce)/(aeg)\\\\0&1/e&-f/(eg)\\\\0&0&1/g\\end{bmatrix}$.'
  },
  {
    id:'midterm-2026-q7', paper:'BMLA Midterm Spring 2026', qn:7, marks:4, topic:'matrix',
    title:'Inverse, transpose determinant, and transpose inverse',
    prompt:'(a) Find the inverse of $A=\\begin{bmatrix}2&-1&1&0\\\\0&6&0&7\\\\4&0&1&0\\\\3&0&1&-2\\end{bmatrix}$. (b) Find $\\det(A^T)$ and $(A^T)^{-1}$.',
    steps:[
      'Row-reduce $[A|I]$ until the left side becomes $I$.',
      'The right side is $A^{-1}$.',
      'Use the identities $\\det(A^T)=\\det(A)$ and $(A^T)^{-1}=(A^{-1})^T$.',
      'The row reduction gives $\\det(A)=31$.'
    ],
    answer:'$A^{-1}=\\frac1{31}\\begin{bmatrix}-12&-2&19&-7\\\\-7&4&-7&14\\\\48&8&-45&28\\\\6&1&6&-12\\end{bmatrix}$. Also $\\det(A^T)=31$ and $(A^T)^{-1}=\\frac1{31}\\begin{bmatrix}-12&-7&48&6\\\\-2&4&8&1\\\\19&-7&-45&6\\\\-7&14&28&-12\\end{bmatrix}$.'
  },
  {
    id:'final-2024-q1', paper:'BMLA Final Spring 2024', qn:1, marks:10, topic:'matrix',
    title:'Invertibility with few calculations',
    prompt:'Determine if $A=\\begin{bmatrix}-1&-3&0&1\\\\3&5&8&-3\\\\-2&-6&3&2\\\\0&-1&2&1\\end{bmatrix}$ is invertible. Use as few calculations as possible and justify your answer.',
    steps:[
      'A square matrix is invertible exactly when it has a pivot in every row and every column.',
      'Row-reducing $A$ gives pivots in columns 1, 2, 3, and 4.',
      'Equivalently, the determinant is nonzero: $\\det(A)=12$.',
      'Since the determinant is not zero, the columns are linearly independent and $A$ is invertible.'
    ],
    answer:'$A$ is invertible because $\\det(A)=12\\ne0$ and the row reduction has four pivots.'
  },
  {
    id:'final-2024-q2', paper:'BMLA Final Spring 2024', qn:2, marks:5, topic:'det',
    title:'Linear independence by determinant',
    prompt:'Use determinants to decide if $v_1=\\begin{bmatrix}7\\\\-4\\\\-6\\end{bmatrix}$, $v_2=\\begin{bmatrix}-8\\\\5\\\\7\\end{bmatrix}$, and $v_3=\\begin{bmatrix}7\\\\0\\\\-5\\end{bmatrix}$ are linearly independent.',
    steps:[
      'Place the vectors as columns of a matrix: $B=\\begin{bmatrix}7&-8&7\\\\-4&5&0\\\\-6&7&-5\\end{bmatrix}$.',
      'For three vectors in $\\mathbb R^3$, the set is linearly independent exactly when $\\det(B)\\ne0$.',
      'Compute the determinant: $\\det(B)=-1$.',
      'Because the determinant is nonzero, the only solution of $c_1v_1+c_2v_2+c_3v_3=0$ is the trivial solution.'
    ],
    answer:'The vectors are linearly independent because $\\det(B)=-1\\ne0$.'
  },
  {
    id:'final-2024-q3', paper:'BMLA Final Spring 2024', qn:3, marks:15, topic:'eigen',
    title:'Diagonalization',
    prompt:'Diagonalize $A=\\begin{bmatrix}2&2&-1\\\\1&3&-1\\\\-1&-2&2\\end{bmatrix}$, if possible.',
    steps:[
      'Find the characteristic equation from $\\det(A-\\lambda I)=0$.',
      '$\\det(A-\\lambda I)=-(\\lambda-1)^2(\\lambda-5)$, so the eigenvalues are $\\lambda=1$ with algebraic multiplicity 2 and $\\lambda=5$.',
      'For $\\lambda=1$, solving $(A-I)x=0$ gives $x_1+2x_2-x_3=0$, so two independent eigenvectors are $(-2,1,0)^T$ and $(1,0,1)^T$.',
      'For $\\lambda=5$, solving $(A-5I)x=0$ gives $x_1+x_3=0$ and $x_2+x_3=0$, so one eigenvector is $(-1,-1,1)^T$.',
      'There are three independent eigenvectors, so $A$ is diagonalizable.'
    ],
    answer:'One valid diagonalization is $A=PDP^{-1}$ with $P=\\begin{bmatrix}-2&1&-1\\\\1&0&-1\\\\0&1&1\\end{bmatrix}$ and $D=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&5\\end{bmatrix}$.'
  },
  {
    id:'final-2024-q4', paper:'BMLA Final Spring 2024', qn:4, marks:10, topic:'det',
    title:"Cramer's rule",
    prompt:"Use Cramer's rule to solve the system $2x_1+x_2=7$, $-3x_1+x_3=-8$, $x_2+2x_3=-3$.",
    steps:[
      'Write the coefficient matrix and right-hand side: $A=\\begin{bmatrix}2&1&0\\\\-3&0&1\\\\0&1&2\\end{bmatrix}$ and $b=\\begin{bmatrix}7\\\\-8\\\\-3\\end{bmatrix}$.',
      'Compute $D=\\det(A)=4$. Since $D\\ne0$, the system has a unique solution.',
      'Replace column 1 by $b$ to get $D_1=6$, so $x_1=D_1/D=6/4=3/2$.',
      'Replace column 2 by $b$ to get $D_2=16$, so $x_2=D_2/D=16/4=4$.',
      'Replace column 3 by $b$ to get $D_3=-14$, so $x_3=D_3/D=-14/4=-7/2$.'
    ],
    answer:'$(x_1,x_2,x_3)=\\left(\\frac32,4,-\\frac72\\right)$.'
  },
  {
    id:'final-2024-q5', paper:'BMLA Final Spring 2024', qn:5, marks:5, topic:'eigen',
    title:'Eigenspace dimension with a parameter',
    prompt:'It can be shown that the algebraic multiplicity of an eigenvalue $\\lambda$ is always greater than or equal to the dimension of its eigenspace. Find $h$ in $A=\\begin{bmatrix}4&2&3&3\\\\0&2&h&3\\\\0&0&4&14\\\\0&0&0&2\\end{bmatrix}$ such that the eigenspace for $\\lambda=4$ is two-dimensional.',
    steps:[
      'Compute $A-4I=\\begin{bmatrix}0&2&3&3\\\\0&-2&h&3\\\\0&0&0&14\\\\0&0&0&-2\\end{bmatrix}$.',
      'The last two rows force $x_4=0$. The variable $x_1$ is free because the first column is zero.',
      'For the eigenspace to be two-dimensional, $x_2$ and $x_3$ must have one free direction, so the two equations in $x_2,x_3$ must be dependent.',
      'With $x_4=0$, the equations are $2x_2+3x_3=0$ and $-2x_2+hx_3=0$.',
      'The second row must be $-1$ times the first row, so $h=-3$.'
    ],
    answer:'$h=-3$. Then the eigenspace for $\\lambda=4$ has two free variables and dimension 2.'
  },
  {
    id:'final-2024-q6', paper:'BMLA Final Spring 2024', qn:6, marks:20, topic:'lp',
    title:'Linear programming by simplex and graph',
    prompt:'Solve the linear programming problem: minimize $z=4x_1-3x_2$ subject to $2x_1-4x_2\\ge20$, $4x_1+3x_2\\le12$, and $x_1,x_2\\ge0$. (a) Use the Simplex method. (b) Verify graphically. (c) Explain your answer.',
    steps:[
      'First check feasibility before optimizing. The first constraint gives $x_1-2x_2\\ge10$, so $x_1\\ge10+2x_2$.',
      'Because $x_2\\ge0$, this implies $x_1\\ge10$.',
      'Then $4x_1+3x_2\\ge4(10)+3(0)=40$.',
      'But the second constraint requires $4x_1+3x_2\\le12$, which is impossible.',
      'In a simplex setup, Phase I would fail because no feasible starting solution can satisfy both constraints.'
    ],
    answer:'The LP is infeasible. There is no point satisfying both constraints, so no minimum value exists.'
  },
  {
    id:'final-2024-q7', paper:'BMLA Final Spring 2024', qn:7, marks:5, topic:'transassign',
    title:'Transportation model formulation',
    prompt:'A chemical company manufactures liquid oxygen at three plants and must supply four depots. Shipping costs per 1,000 gallons are: Plant 1 to depots 1-4: 50, 40, 35, 20 with supply 1000; Plant 2: 30, 45, 40, 60 with supply 1400; Plant 3: 60, 25, 50, 30 with supply 1800. Demands are Depot 1: 800, Depot 2: 750, Depot 3: 650, Depot 4: 900. If $x_{ij}$ is the number of gallons in thousands shipped from plant $i$ to depot $j$, formulate the LP model for the minimum-cost allocation schedule.',
    steps:[
      'Let $x_{ij}\\ge0$ be the thousand-gallon shipment from plant $i$ to depot $j$.',
      'The objective is total shipping cost across all plant-depot routes.',
      'Plant capacity constraints are upper bounds because capacities must not be violated.',
      'Depot demand constraints are equalities because all depot demands must be satisfied.',
      'Total supply is 4200 and total demand is 3100, so unused plant capacity is allowed by the capacity inequalities.'
    ],
    answer:'Minimize $Z=50x_{11}+40x_{12}+35x_{13}+20x_{14}+30x_{21}+45x_{22}+40x_{23}+60x_{24}+60x_{31}+25x_{32}+50x_{33}+30x_{34}$ subject to $x_{11}+x_{12}+x_{13}+x_{14}\\le1000$, $x_{21}+x_{22}+x_{23}+x_{24}\\le1400$, $x_{31}+x_{32}+x_{33}+x_{34}\\le1800$, $x_{11}+x_{21}+x_{31}=800$, $x_{12}+x_{22}+x_{32}=750$, $x_{13}+x_{23}+x_{33}=650$, $x_{14}+x_{24}+x_{34}=900$, and all $x_{ij}\\ge0$.'
  },
  {
    id:'final-2024-q8', paper:'BMLA Final Spring 2024', qn:8, marks:10, topic:'transassign',
    title:'Assignment model minimum days',
    prompt:'Assign five programming tasks to five programmers to minimize total days. The estimated days matrix is $\\begin{bmatrix}20&15&18&20&25\\\\18&20&12&14&15\\\\21&23&25&27&25\\\\17&18&21&23&20\\\\18&18&16&19&20\\end{bmatrix}$, where rows are programmers 1-5 and columns are tasks 1-5.',
    steps:[
      'This is a balanced assignment problem: one programmer must be assigned to one task and each task must be assigned once.',
      'Apply the Hungarian method by row-reducing and column-reducing the cost matrix, then cover zeros with the minimum number of lines.',
      'After adjustments, a complete set of independent zeros corresponds to assignments $(1,2)$, $(2,4)$, $(3,1)$, $(4,5)$, and $(5,3)$.',
      'Compute the total cost from the original table: $15+14+21+20+16=86$.',
      'No lower assignment total is available after the Hungarian reduction, so this is optimal.'
    ],
    answer:'Minimum total time is $86$ days. Assign Programmer 1 -> Task 2, Programmer 2 -> Task 4, Programmer 3 -> Task 1, Programmer 4 -> Task 5, and Programmer 5 -> Task 3.'
  },
  {
    id:'final-2024-q9', paper:'BMLA Final Spring 2024', qn:9, marks:20, topic:'transassign',
    title:'Northwest corner and first stepping-stone move',
    prompt:'For the transportation problem with costs $\\begin{bmatrix}19&30&50&10\\\\70&30&40&60\\\\40&8&70&20\\end{bmatrix}$, supplies $(7,9,18)$, and demands $(5,8,7,14)$: (a) use the Northwest corner method to determine an initial solution. (b) Use the Stepping stone algorithm to determine the first departing variable and first entering cell.',
    steps:[
      'Northwest corner starts at $O_1D_1$: allocate $\\min(7,5)=5$, leaving $O_1=2$ and satisfying $D_1$.',
      'Move to $O_1D_2$: allocate $2$, exhausting $O_1$ and leaving $D_2=6$.',
      'Move to $O_2D_2$: allocate $6$, leaving $O_2=3$ and satisfying $D_2$.',
      'Move to $O_2D_3$: allocate $3$, exhausting $O_2$ and leaving $D_3=4$.',
      'Move to $O_3D_3$: allocate $4$, satisfying $D_3$, then allocate the remaining $14$ to $O_3D_4$.',
      'Initial cost is $5(19)+2(30)+6(30)+3(40)+4(70)+14(20)=1015$.',
      'Using potentials from the basic cells gives opportunity costs: $\\Delta_{13}=10$, $\\Delta_{14}=20$, $\\Delta_{21}=51$, $\\Delta_{24}=70$, $\\Delta_{31}=-9$, and $\\Delta_{32}=-52$.',
      'The most negative value is $\\Delta_{32}=-52$, so $O_3D_2$ is the first entering cell.',
      'The stepping-stone loop is $O_3D_2(+)$, $O_3D_3(-)$, $O_2D_3(+)$, $O_2D_2(-)$. The minimum minus allocation is $\\min(4,6)=4$, so $O_3D_3$ departs.'
    ],
    answer:'Northwest initial allocation: $x_{11}=5$, $x_{12}=2$, $x_{22}=6$, $x_{23}=3$, $x_{33}=4$, $x_{34}=14$ with cost $1015$. First entering cell: $O_3D_2$. First departing variable: $x_{33}$.'
  }
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
  indep: {
    title: 'Chapter 1 (cont.) · Linear Independence & Transformations',
    intro: 'Three lectures (L6, L7, L8) that bridge Chapter 1 to Chapter 2. Independence determines invertibility. Linear transformations connect matrices to functions. Standard matrix = key technique on the exam.',
    lectures: [
      { n:6, title:'Lecture 6 — Linear Independence',
        learn:['State the definition formally.','Apply quick tests (zero vector, scalar multiples, p > n).','Find a dependency relation when one exists.','Connect independence to columns having a pivot.'],
        theory:[
          { h:'Definition', b:'Vectors $\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\}$ are <strong>linearly independent</strong> iff the equation $c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}$ has ONLY the trivial solution $c_1=\\cdots=c_p=0$. Otherwise dependent.' },
          { h:'Equivalent matrix test', b:'$\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\}$ is independent iff matrix $A=[\\mathbf{v}_1\\,\\mathbf{v}_2\\,\\cdots\\,\\mathbf{v}_p]$ has a pivot in <strong>every column</strong>. Just row-reduce and count pivots.' },
          { h:'Three quick tests (use first)', b:'• A set containing the zero vector is automatically <strong>dependent</strong>. • A set of exactly 2 vectors is dependent iff one is a scalar multiple of the other. • If $p > n$ (more vectors than entries in each), the set is automatically <strong>dependent</strong>.' },
          { h:'Dependency relation', b:'If dependent, write $c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}$ with NOT all $c_i=0$. Found by solving $A\\mathbf{c}=\\mathbf{0}$ for a non-trivial $\\mathbf{c}$.' }
        ],
        examples:[
          { q:'Are $\\mathbf{v}_1=(1,2,3),\\;\\mathbf{v}_2=(4,5,6),\\;\\mathbf{v}_3=(2,1,0)$ linearly independent?',
            steps:[
              'Form $A=\\begin{pmatrix}1&4&2\\\\2&5&1\\\\3&6&0\\end{pmatrix}$ and row-reduce.',
              '$R_2\\to R_2-2R_1,\\;R_3\\to R_3-3R_1$: $\\begin{pmatrix}1&4&2\\\\0&-3&-3\\\\0&-6&-6\\end{pmatrix}$.',
              '$R_3\\to R_3-2R_2$: $\\begin{pmatrix}1&4&2\\\\0&-3&-3\\\\0&0&0\\end{pmatrix}$.',
              'Only 2 pivots (cols 1, 2). Column 3 has no pivot.'
            ],
            answer:'<strong>Dependent.</strong> Dependency: from row 2, $-3c_2-3c_3=0\\Rightarrow c_2=-c_3$. Pick $c_3=1$: $c_2=-1$, $c_1=2$. Check: $2\\mathbf{v}_1-\\mathbf{v}_2+\\mathbf{v}_3=(2-4+2,4-5+1,6-6+0)=(0,0,0)$ ✓.'
          },
          { q:'5 vectors in $\\mathbb{R}^4$: independent or dependent?',
            steps:[
              'Apply the $p>n$ test: here $p=5$ vectors, $n=4$ entries each.',
              '$5 > 4$ automatically forces dependence.'
            ],
            answer:'<strong>Dependent.</strong> No row reduction needed — the quick test settles it.'
          },
          { q:'For what value(s) of $h$ are $\\mathbf{v}_1=(1,-1,2),\\;\\mathbf{v}_2=(5,-4,7),\\;\\mathbf{v}_3=(-3,1,h)$ dependent?',
            steps:[
              'Set up matrix $\\begin{pmatrix}1&5&-3\\\\-1&-4&1\\\\2&7&h\\end{pmatrix}$, row-reduce.',
              '$R_2\\to R_2+R_1,\\;R_3\\to R_3-2R_1$: $\\begin{pmatrix}1&5&-3\\\\0&1&-2\\\\0&-3&h+6\\end{pmatrix}$.',
              '$R_3\\to R_3+3R_2$: $\\begin{pmatrix}1&5&-3\\\\0&1&-2\\\\0&0&h\\end{pmatrix}$.',
              'Pivot in column 3 iff $h\\ne 0$. Dependent iff column 3 lacks a pivot, i.e., $h=0$.'
            ],
            answer:'Dependent iff <strong>$h=0$</strong>. Otherwise independent.'
          }
        ]
      },
      { n:7, title:'Lecture 7 — Linear Transformations',
        learn:['Verify a function is a linear transformation.','Compute the standard matrix $A$ from $T(\\mathbf{e}_i)$.','Recognize one-to-one vs onto via $A$.'],
        theory:[
          { h:'Linear transformation', b:'$T:\\mathbb{R}^n\\to\\mathbb{R}^m$ is <strong>linear</strong> iff $T(\\mathbf{u}+\\mathbf{v})=T(\\mathbf{u})+T(\\mathbf{v})$ AND $T(c\\mathbf{u})=c\\,T(\\mathbf{u})$ for all vectors and scalars. Equivalent: $T(c\\mathbf{u}+d\\mathbf{v})=c\\,T(\\mathbf{u})+d\\,T(\\mathbf{v})$.' },
          { h:'Standard matrix', b:'Every linear $T$ has a unique standard matrix $A=[T(\\mathbf{e}_1)\\;T(\\mathbf{e}_2)\\;\\cdots\\;T(\\mathbf{e}_n)]$ where $\\mathbf{e}_i$ are the standard basis vectors. Then $T(\\mathbf{x})=A\\mathbf{x}$ for every $\\mathbf{x}$.' },
          { h:'One-to-one (injective)', b:'$T$ is 1-1 iff $T(\\mathbf{x})=\\mathbf{0}$ implies $\\mathbf{x}=\\mathbf{0}$ iff columns of $A$ are linearly independent iff $A$ has a pivot in every column.' },
          { h:'Onto (surjective)', b:'$T$ is onto iff every $\\mathbf{b}\\in\\mathbb{R}^m$ is some $T(\\mathbf{x})$ iff columns of $A$ span $\\mathbb{R}^m$ iff $A$ has a pivot in every row.' }
        ],
        examples:[
          { q:'Find the standard matrix of $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ that rotates vectors by 90° counter-clockwise.',
            steps:[
              'Compute $T(\\mathbf{e}_1)=T(1,0)$: rotating $(1,0)$ 90° CCW gives $(0,1)$.',
              'Compute $T(\\mathbf{e}_2)=T(0,1)$: rotating $(0,1)$ 90° CCW gives $(-1,0)$.',
              'Stack as columns: $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$.'
            ],
            answer:'$A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$. Then $T(\\mathbf{x})=A\\mathbf{x}$ rotates any $\\mathbf{x}$ by 90° CCW.'
          },
          { q:'Let $T(x_1,x_2,x_3,x_4)=(x_1+x_2,\\;3x_3,\\;x_4-x_2)$. Find its standard matrix and decide if it is 1-1 and onto.',
            steps:[
              '$T:\\mathbb{R}^4\\to\\mathbb{R}^3$.',
              '$T(\\mathbf{e}_1)=(1,0,0),\\;T(\\mathbf{e}_2)=(1,0,-1),\\;T(\\mathbf{e}_3)=(0,3,0),\\;T(\\mathbf{e}_4)=(0,0,1)$.',
              '$A=\\begin{pmatrix}1&1&0&0\\\\0&0&3&0\\\\0&-1&0&1\\end{pmatrix}$.',
              'Row-reduce to count pivots: $R_2\\leftrightarrow R_3$ gives $\\begin{pmatrix}1&1&0&0\\\\0&-1&0&1\\\\0&0&3&0\\end{pmatrix}$ — 3 pivots in rows 1, 2, 3.',
              'Pivot in every row (3 of 3) → ONTO. But columns: 3 pivots, 4 columns → not every column has pivot → NOT 1-1.'
            ],
            answer:'Standard matrix $A$ as above. <strong>Onto, but not one-to-one.</strong> Makes sense: $T$ maps a 4D space onto a 3D space, so it must collapse some directions.'
          },
          { q:'Is the function $T(x_1,x_2)=(x_1+x_2,\\;x_1 x_2)$ a linear transformation?',
            steps:[
              'Test: $T(2(1,1))=T(2,2)=(4,4)$. And $2\\,T(1,1)=2(2,1)=(4,2)$.',
              '$(4,4)\\ne(4,2)$ — scalar multiplication property fails.'
            ],
            answer:'<strong>Not</strong> a linear transformation. The product $x_1x_2$ breaks linearity (anything with $x_ix_j$, $x_i^2$, or constants $\\ne 0$ kills linearity).'
          }
        ]
      },
      { n:8, title:'Lecture 8 — Matrix of LT · Linear Models',
        learn:['Compose linear transformations via matrix multiplication.','Use rotation, reflection, projection standard matrices.','Apply to economic / engineering models.'],
        theory:[
          { h:'Composition', b:'If $T(\\mathbf{x})=A\\mathbf{x}$ and $S(\\mathbf{x})=B\\mathbf{x}$, then $(S\\circ T)(\\mathbf{x})=S(T(\\mathbf{x}))=BA\\mathbf{x}$. <strong>Composition of LTs = matrix multiplication</strong> (in that order — $S$ second means $B$ on the left).' },
          { h:'Common 2×2 transformations', b:'Rotation by $\\theta$ CCW: $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$. Reflection across $x$-axis: $\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$. Reflection across $y=x$: $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$. Scaling by $k$: $kI$.' }
        ],
        examples:[
          { q:'Find the matrix of the transformation that first reflects across the $x$-axis, then rotates 90° CCW.',
            steps:[
              'Reflection $R=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ first. Rotation $Q=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ second.',
              'Composition: apply $R$ then $Q$ = $Q\\cdot R$.',
              '$QR=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$.'
            ],
            answer:'$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ — which happens to be reflection across $y=x$. (Geometrically: reflect + rotate 90° = reflect across the diagonal.)'
          },
          { q:'<strong>Linear economic model.</strong> A factory makes 2 products using 3 inputs. Input cost vector per unit of product 1: $(2,1,3)^T$. Per unit of product 2: $(1,4,2)^T$. If $\\mathbf{x}=(x_1,x_2)^T$ are production levels, write the total input vector as $T(\\mathbf{x})$ and identify the standard matrix.',
            steps:[
              '$T(\\mathbf{x})$ should give total inputs used across all 3 categories.',
              'Total input vector = $x_1\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}+x_2\\begin{pmatrix}1\\\\4\\\\2\\end{pmatrix}=A\\mathbf{x}$',
              'Standard matrix: $A=\\begin{pmatrix}2&1\\\\1&4\\\\3&2\\end{pmatrix}$.'
            ],
            answer:'$T:\\mathbb{R}^2\\to\\mathbb{R}^3$, $T(\\mathbf{x})=A\\mathbf{x}$ with $A$ as above. Each column of $A$ = "input recipe" for one product.'
          }
        ]
      }
    ]
  },
  matrix: {
    title: 'Chapter 2 · Matrix Operations & Inverse',
    intro: 'Three lectures on matrix algebra and the Invertible Matrix Theorem. IMT is a high-likelihood exam topic — memorize the 12 equivalences.',
    lectures: [
      { n:9, title:'Lecture 9 — Matrix Operations',
        learn:['Compute $A+B$, $cA$, $AB$, $A^T$.','Apply matrix algebra rules.','Recognize when products are defined.'],
        theory:[
          { h:'Addition & scalar', b:'$A+B$: entry-wise (same dimensions required). $cA$: multiply every entry by $c$.' },
          { h:'Matrix multiplication', b:'$(AB)_{ij}=\\sum_k A_{ik}B_{kj}$ = row $i$ of $A$ dotted with column $j$ of $B$. Need #cols$(A)$ = #rows$(B)$. Result has dims: rows of $A$ by cols of $B$.' },
          { h:'Key identities', b:'$(AB)C=A(BC)$ associative. $A(B+C)=AB+AC$ distributive. $(AB)^T=B^TA^T$ (order reverses!). $AB\\ne BA$ in general — not commutative.' }
        ],
        examples:[
          { q:'For $A=\\begin{pmatrix}2&-1\\\\3&4\\end{pmatrix}$ and $B=\\begin{pmatrix}1&2&0\\\\-1&3&5\\end{pmatrix}$, compute $AB$ and explain why $BA$ is undefined.',
            steps:[
              '$A$ is $2\\times 2$, $B$ is $2\\times 3$. #cols$(A)=2$ = #rows$(B)$ ✓. $AB$ is $2\\times 3$.',
              'Row 1 of $AB$: $(2,-1)\\cdot$ each column of $B$: $(2-(-1)\\cdot 1,\\;2\\cdot 2-(-1)\\cdot 3,\\;2\\cdot 0-(-1)\\cdot 5)=(3,7,5)$.',
              'Row 2: $(3,4)\\cdot$ each column: $(3-4,\\;6+12,\\;0+20)=(-1,18,20)$.',
              '$AB=\\begin{pmatrix}3&7&5\\\\-1&18&20\\end{pmatrix}$.',
              'For $BA$: $B$ is $2\\times 3$, $A$ is $2\\times 2$. #cols$(B)=3\\ne 2=$ #rows$(A)$ → undefined.'
            ],
            answer:'$AB=\\begin{pmatrix}3&7&5\\\\-1&18&20\\end{pmatrix}$. $BA$ undefined (dimension mismatch).'
          },
          { q:'Show that $(AB)^T = B^TA^T$ for $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$, $B=\\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}$.',
            steps:[
              '$AB=\\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}\\Rightarrow (AB)^T=\\begin{pmatrix}19&43\\\\22&50\\end{pmatrix}$.',
              '$A^T=\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix},\\;B^T=\\begin{pmatrix}5&7\\\\6&8\\end{pmatrix}$.',
              '$B^TA^T=\\begin{pmatrix}5&7\\\\6&8\\end{pmatrix}\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}=\\begin{pmatrix}19&43\\\\22&50\\end{pmatrix}$.'
            ],
            answer:'Both equal $\\begin{pmatrix}19&43\\\\22&50\\end{pmatrix}$. <strong>Order reverses on transpose</strong>: $(AB)^T\\ne A^TB^T$ generally.'
          }
        ]
      },
      { n:10, title:'Lecture 10 — The Inverse of a Matrix',
        learn:['Apply the 2×2 inverse formula.','Compute $A^{-1}$ via $[A|I]\\to[I|A^{-1}]$ row reduction.','Use $A^{-1}$ to solve $A\\mathbf{x}=\\mathbf{b}$.'],
        theory:[
          { h:'Definition', b:'$A$ ($n\\times n$) is invertible iff there exists $A^{-1}$ with $AA^{-1}=A^{-1}A=I$. If exists, $A^{-1}$ is unique.' },
          { h:'2×2 formula', b:'$A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, $\\det A=ad-bc$. If $\\det A\\ne 0$: $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.' },
          { h:'General method', b:'Form augmented matrix $[A|I]$. Row-reduce until left half is $I$. Right half is then $A^{-1}$. If left half cannot reduce to $I$ (a row of zeros appears), $A$ is singular.' },
          { h:'Solve via inverse', b:'If $A$ invertible and $A\\mathbf{x}=\\mathbf{b}$, then $\\mathbf{x}=A^{-1}\\mathbf{b}$. Useful when you must solve for many right-hand sides $\\mathbf{b}$.' },
          { h:'Identities', b:'$(AB)^{-1}=B^{-1}A^{-1}$ (order reverses). $(A^T)^{-1}=(A^{-1})^T$. $(cA)^{-1}=\\frac{1}{c}A^{-1}$.' }
        ],
        examples:[
          { q:'Find $A^{-1}$ for $A=\\begin{pmatrix}3&5\\\\1&2\\end{pmatrix}$.',
            steps:[
              '$\\det A=3\\cdot 2-5\\cdot 1=1\\ne 0$. Invertible.',
              'Apply 2×2 formula: $A^{-1}=\\frac{1}{1}\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}=\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}$.',
              'Verify: $AA^{-1}=\\begin{pmatrix}3&5\\\\1&2\\end{pmatrix}\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$ ✓'
            ],
            answer:'$A^{-1}=\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}$.'
          },
          { q:'Find $A^{-1}$ for $A=\\begin{pmatrix}1&2&3\\\\2&5&3\\\\1&0&8\\end{pmatrix}$ via row reduction.',
            steps:[
              'Set up $[A|I]=\\begin{pmatrix}1&2&3&|&1&0&0\\\\2&5&3&|&0&1&0\\\\1&0&8&|&0&0&1\\end{pmatrix}$.',
              '$R_2\\to R_2-2R_1,\\;R_3\\to R_3-R_1$: $\\begin{pmatrix}1&2&3&|&1&0&0\\\\0&1&-3&|&-2&1&0\\\\0&-2&5&|&-1&0&1\\end{pmatrix}$.',
              '$R_3\\to R_3+2R_2$: $\\begin{pmatrix}1&2&3&|&1&0&0\\\\0&1&-3&|&-2&1&0\\\\0&0&-1&|&-5&2&1\\end{pmatrix}$.',
              '$R_3\\to -R_3$: $\\begin{pmatrix}1&2&3&|&1&0&0\\\\0&1&-3&|&-2&1&0\\\\0&0&1&|&5&-2&-1\\end{pmatrix}$.',
              '$R_2\\to R_2+3R_3,\\;R_1\\to R_1-3R_3$: $\\begin{pmatrix}1&2&0&|&-14&6&3\\\\0&1&0&|&13&-5&-3\\\\0&0&1&|&5&-2&-1\\end{pmatrix}$.',
              '$R_1\\to R_1-2R_2$: $\\begin{pmatrix}1&0&0&|&-40&16&9\\\\0&1&0&|&13&-5&-3\\\\0&0&1&|&5&-2&-1\\end{pmatrix}$.'
            ],
            answer:'$A^{-1}=\\begin{pmatrix}-40&16&9\\\\13&-5&-3\\\\5&-2&-1\\end{pmatrix}$.'
          },
          { q:'Use $A^{-1}=\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}$ to solve $A\\mathbf{x}=\\mathbf{b}$ for $\\mathbf{b}=(7,2)^T$.',
            steps:[
              '$\\mathbf{x}=A^{-1}\\mathbf{b}=\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}\\begin{pmatrix}7\\\\2\\end{pmatrix}$.',
              '$=\\begin{pmatrix}2\\cdot 7+(-5)\\cdot 2\\\\(-1)\\cdot 7+3\\cdot 2\\end{pmatrix}=\\begin{pmatrix}4\\\\-1\\end{pmatrix}$.'
            ],
            answer:'$\\mathbf{x}=(4,-1)^T$. Method shines when many $\\mathbf{b}$ vectors need solving — compute $A^{-1}$ once, multiply many times.'
          }
        ]
      },
      { n:11, title:'Lecture 11 — Invertible Matrix Theorem (IMT)',
        learn:['Recite the 12+ equivalent characterizations of "$A$ is invertible".','Use any one to prove or disprove invertibility.','Apply IMT to parametric matrices.'],
        theory:[
          { h:'The IMT (Lay §2.3 Theorem 8)', b:'For a SQUARE $n\\times n$ matrix $A$, the following are ALL equivalent. If any one is true, all are true; if any one is false, all are false. <br><br>(a) $A$ is invertible.<br>(b) $A$ is row-equivalent to $I_n$.<br>(c) $A$ has $n$ pivot positions.<br>(d) $A\\mathbf{x}=\\mathbf{0}$ has only the trivial solution.<br>(e) Columns of $A$ are linearly independent.<br>(f) The transformation $\\mathbf{x}\\mapsto A\\mathbf{x}$ is one-to-one.<br>(g) $A\\mathbf{x}=\\mathbf{b}$ has at least one solution for every $\\mathbf{b}\\in\\mathbb{R}^n$.<br>(h) Columns of $A$ span $\\mathbb{R}^n$.<br>(i) The transformation $\\mathbf{x}\\mapsto A\\mathbf{x}$ is onto.<br>(j) There exists $C$ with $CA=I$.<br>(k) There exists $D$ with $AD=I$.<br>(l) $A^T$ is invertible.<br>(m) $\\det A\\ne 0$.<br>(n) $0$ is NOT an eigenvalue of $A$.' },
          { h:'How to use IMT', b:'Pick whichever condition is easiest to check. Computing $\\det A$ is often fastest for 2×2/3×3. Counting pivots is fastest if already row-reducing. The "column span $\\mathbb{R}^n$" interpretation is best for proofs.' },
          { h:'Sharp warning', b:'IMT applies ONLY to SQUARE matrices. For non-square, "invertible" doesn\'t exist; you talk about left-inverse OR right-inverse separately.' }
        ],
        examples:[
          { q:'Is $A=\\begin{pmatrix}1&3&-2\\\\-2&1&5\\\\3&-5&-3\\end{pmatrix}$ invertible?',
            steps:[
              'Strategy: compute $\\det A$ (fastest for $3\\times 3$). Expand along row 1.',
              '$\\det A=1\\cdot\\det\\begin{pmatrix}1&5\\\\-5&-3\\end{pmatrix}-3\\cdot\\det\\begin{pmatrix}-2&5\\\\3&-3\\end{pmatrix}+(-2)\\cdot\\det\\begin{pmatrix}-2&1\\\\3&-5\\end{pmatrix}$',
              '$=1(-3-(-25))-3(6-15)+(-2)(10-3)$',
              '$=1\\cdot 22-3\\cdot(-9)-2\\cdot 7=22+27-14=35$.',
              '$\\det A=35\\ne 0$.'
            ],
            answer:'<strong>Invertible</strong> by IMT (m). All 14 conditions hold.'
          },
          { q:'For which $h$ is $A=\\begin{pmatrix}h&-3\\\\2&4\\end{pmatrix}$ NOT invertible?',
            steps:[
              'By IMT (m): not invertible iff $\\det A=0$.',
              '$\\det A=4h-(-3)(2)=4h+6$.',
              '$4h+6=0\\Rightarrow h=-\\tfrac{3}{2}$.'
            ],
            answer:'Not invertible iff $h=-3/2$. For any other $h$, $A$ is invertible.'
          }
        ]
      }
    ]
  },
  det: {
    title: 'Chapter 3 · Determinants',
    intro: 'Two lectures: definition via cofactor expansion, then properties + Cramer\'s Rule. Determinant tells you if a matrix is invertible ($\\det\\ne 0$), how much linear transformations scale volume, and unlocks eigenvalues via $\\det(A-\\lambda I)=0$.',
    lectures: [
      { n:12, title:'Lecture 12 — Introduction to Determinants',
        learn:['Compute $\\det$ for $2\\times 2$ and $3\\times 3$.','Apply cofactor expansion along any row or column.','Use the triangular shortcut.'],
        theory:[
          { h:'2×2 determinant', b:'$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$. Memorize this.' },
          { h:'Cofactor expansion', b:'For larger matrices: pick any row $i$ (or column $j$). Then $\\det A=\\sum_j(-1)^{i+j}a_{ij}M_{ij}$ where $M_{ij}$ is the determinant of the matrix obtained by deleting row $i$ and column $j$. The factor $(-1)^{i+j}$ follows a checkerboard sign pattern.' },
          { h:'Smart row/column choice', b:'Pick the row or column with the MOST ZEROS. Each zero entry contributes nothing, so it cuts your work. Huge time-saver on exams.' },
          { h:'Triangular shortcut', b:'For triangular matrices (upper or lower), $\\det A=$ product of diagonal entries. Don\'t bother expanding — read it off.' }
        ],
        examples:[
          { q:'Compute $\\det\\begin{pmatrix}1&-2&3\\\\0&4&5\\\\0&0&-1\\end{pmatrix}$.',
            steps:[
              'Upper triangular. Det = product of diagonal.',
              '$1\\cdot 4\\cdot(-1)=-4$.'
            ],
            answer:'$\\det A=-4$.'
          },
          { q:'Compute $\\det\\begin{pmatrix}3&5&-2\\\\1&0&7\\\\4&-1&3\\end{pmatrix}$ by cofactor expansion along the second row (has a zero).',
            steps:[
              'Row 2 has $a_{21}=1, a_{22}=0, a_{23}=7$. The zero saves us one cofactor.',
              'Cofactors: $C_{21}=(-1)^{2+1}\\det\\begin{pmatrix}5&-2\\\\-1&3\\end{pmatrix}=-1\\cdot(15-2)=-13$.',
              '$C_{23}=(-1)^{2+3}\\det\\begin{pmatrix}3&5\\\\4&-1\\end{pmatrix}=-1\\cdot(-3-20)=23$.',
              '$\\det A=1\\cdot(-13)+0+7\\cdot 23=-13+161=148$.'
            ],
            answer:'$\\det A=148$.'
          },
          { q:'Compute $\\det\\begin{pmatrix}2&0&0&5\\\\3&1&0&0\\\\0&4&2&0\\\\0&0&0&3\\end{pmatrix}$.',
            steps:[
              'Row 4 has only one nonzero: $a_{44}=3$.',
              'Expand along row 4: $\\det A=3\\cdot(-1)^{4+4}\\det\\begin{pmatrix}2&0&0\\\\3&1&0\\\\0&4&2\\end{pmatrix}$.',
              'Inner matrix is lower triangular → det = $2\\cdot 1\\cdot 2=4$.',
              '$\\det A=3\\cdot 4=12$.'
            ],
            answer:'$\\det A=12$.'
          }
        ]
      },
      { n:13, title:'Lecture 13 — Properties of Determinants',
        learn:['Use row operation effects to compute fast.','Apply $\\det(AB)=\\det A\\cdot\\det B$ and related identities.','Use Cramer\'s Rule.'],
        theory:[
          { h:'Row operation effects', b:'<strong>R1 (Replacement):</strong> $R_i\\to R_i+kR_j$ — det UNCHANGED. <strong>R2 (Swap):</strong> det × $(-1)$. <strong>R3 (Scale by $k$):</strong> det × $k$. Use R1 freely to create zeros, then expand.' },
          { h:'Multiplicative', b:'$\\det(AB)=\\det A\\cdot\\det B$. So $\\det(A^k)=(\\det A)^k$. And $\\det(A^{-1})=1/\\det A$ (if $A$ invertible).' },
          { h:'Transpose', b:'$\\det(A^T)=\\det A$. Useful: you can expand along columns just as well as rows.' },
          { h:'Scalar', b:'$\\det(kA)=k^n\\det A$ for $n\\times n$ matrix. Easy to miss: each of the $n$ rows is scaled, so $k$ appears $n$ times.' },
          { h:'Cramer\'s Rule', b:'For $A\\mathbf{x}=\\mathbf{b}$ with $\\det A\\ne 0$: $x_i=\\det(A_i)/\\det A$, where $A_i$ is $A$ with column $i$ replaced by $\\mathbf{b}$.' }
        ],
        examples:[
          { q:'Given $\\det A=5$ for a $3\\times 3$ matrix $A$, find $\\det(2A)$ and $\\det(A^{-1})$.',
            steps:[
              '$\\det(2A)=2^3\\det A=8\\cdot 5=40$.',
              '$\\det(A^{-1})=1/\\det A=1/5$.'
            ],
            answer:'$\\det(2A)=40,\\;\\det(A^{-1})=1/5$.'
          },
          { q:'Solve via Cramer\'s Rule: $\\begin{cases}3x_1+2x_2=4\\\\x_1-x_2=3\\end{cases}$',
            steps:[
              'Coefficient matrix $A=\\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}$, $\\det A=-3-2=-5$.',
              '$A_1=\\begin{pmatrix}4&2\\\\3&-1\\end{pmatrix}$, $\\det A_1=-4-6=-10$.',
              '$A_2=\\begin{pmatrix}3&4\\\\1&3\\end{pmatrix}$, $\\det A_2=9-4=5$.',
              '$x_1=-10/-5=2,\\;x_2=5/-5=-1$.',
              'Check: $3(2)+2(-1)=4$ ✓, $2-(-1)=3$ ✓.'
            ],
            answer:'$x_1=2,\\;x_2=-1$.'
          },
          { q:'Use row reduction (R1 ops preserve det) to compute $\\det\\begin{pmatrix}1&2&-1\\\\2&5&1\\\\3&7&0\\end{pmatrix}$.',
            steps:[
              '$R_2\\to R_2-2R_1$ (det unchanged): $\\begin{pmatrix}1&2&-1\\\\0&1&3\\\\3&7&0\\end{pmatrix}$.',
              '$R_3\\to R_3-3R_1$ (det unchanged): $\\begin{pmatrix}1&2&-1\\\\0&1&3\\\\0&1&3\\end{pmatrix}$.',
              '$R_3\\to R_3-R_2$ (det unchanged): $\\begin{pmatrix}1&2&-1\\\\0&1&3\\\\0&0&0\\end{pmatrix}$ — upper triangular with a zero on diagonal.',
              'Det = $1\\cdot 1\\cdot 0=0$.'
            ],
            answer:'$\\det A=0$. Matrix is <strong>singular</strong>. (Note: a row of zeros after only R1 operations directly proves singularity.)'
          }
        ]
      }
    ]
  },
  eigen: {
    title: 'Chapter 5 · Eigenvalues, Diagonalization & Markov ⭐',
    intro: 'The post-midterm crown jewel — almost guaranteed on the final. Master: char eq → eigenvalues → eigenvectors → diagonalize → use for $A^k$ or Markov steady state.',
    lectures: [
      { n:14, title:'Lecture 14 — Eigenvalues & Eigenvectors',
        learn:['Definition $A\\mathbf{v}=\\lambda\\mathbf{v}$ and why $\\mathbf{v}\\neq\\mathbf{0}$.','Verify if a vector is an eigenvector.','Find the <strong>eigenspace</strong> for a known eigenvalue.','Triangular shortcut.','Independence of eigenvectors for distinct eigenvalues.'],
        theory:[
          { h:'📺 Watch first — 3Blue1Brown · Eigenvectors and eigenvalues (17 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/PFDu9oVAE-g" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">The visual intuition for eigenvectors. The rotations + stretching make it click instantly. Cannot recommend enough.</p>' },
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
          { h:'📺 Watch first — Patrick JMT · Finding eigenvalues (12 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/pZ6mLVEZLNE" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Pure procedural walkthrough — compute the characteristic polynomial and solve for eigenvalues on real 2×2 and 3×3 matrices. Exam-style.</p>' },
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
          { h:'📺 Watch first — 3Blue1Brown · Change of basis (13 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/P2LTAUO1TdA" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Makes $A = PDP^{-1}$ feel obvious — diagonalization is just "change basis to eigenvector coordinates, do the simple scaling, change back". Watch before tackling the worked examples.</p>' },
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
          { h:'📺 Watch first — Normalized Nerd · Markov Chains Clearly Explained (10 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/i3AkTO9HLXo" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Quick + clear with a weather example. Watch this even if Markov feels intimidating — it\'s the friendliest intro on YouTube.</p>' },
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
  lp: {
    title: 'Linear Programming · Graphical + Simplex + Duality',
    intro: 'High exam likelihood. Master formulation → graphical (2 vars) → simplex (any n) → duality (sanity check + interpretation). Practice writing full simplex tableaus by hand — that\'s how the exam tests it.',
    lectures: [
      { n:18, title:'Lectures 17-18 — LP Formulation & Graphical Method',
        learn:['Formulate a real problem as LP (decision vars, objective, constraints).','Plot feasible region for a 2-variable LP.','Apply the corner-point theorem.','Recognize alternative optima, infeasible, and unbounded cases.'],
        theory:[
          { h:'📺 Watch first — Joshua Emmanuel · Graphical LP (8 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Bzzqx1F23a8" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Compact end-to-end walkthrough — feasible region, corner points, optimum.</p>' },
          { h:'Standard LP', b:'Max (or Min) $Z = c_1 x_1 + c_2 x_2 + \\cdots + c_n x_n$ subject to inequality constraints $a_{i1}x_1 + \\cdots + a_{in}x_n \\le b_i$ and sign restrictions $x_j \\ge 0$.' },
          { h:'Corner-Point Theorem (Fundamental Thm of LP)', b:'If an LP has an optimum, AT LEAST ONE optimal solution lies at a corner (extreme point) of the feasible region. So we only need to check corners — never interior or random boundary points.' },
          { h:'Graphical procedure (2-variable)', b:'1. Plot each constraint as a line; shade feasible half-plane. 2. Identify the feasible region (intersection). 3. List ALL corner points and their $(x, y)$ coordinates by solving the systems where pairs of constraint lines meet. 4. Evaluate $Z$ at every corner. 5. Pick max (or min).' },
          { h:'Four outcomes possible', b:'<strong>Unique optimum:</strong> one corner is best. <strong>Alternative optima:</strong> two adjacent corners tie → entire edge is optimal. <strong>Infeasible:</strong> no feasible region (constraints contradict). <strong>Unbounded:</strong> feasible region extends to infinity in the direction of improvement → $Z \\to \\infty$.' }
        ],
        examples:[
          { q:'<strong>Formulate as LP.</strong> A bakery makes cakes ($x_1$) and pies ($x_2$). Each cake needs 2h labor + 3 cups flour. Each pie needs 1h labor + 1 cup flour. 12h labor and 9 cups flour available. Profit: $40 per cake, $25 per pie. Maximize profit.',
            steps:[
              'Decision variables: $x_1$ = cakes, $x_2$ = pies (both $\\ge 0$).',
              'Objective: maximize $Z = 40x_1 + 25x_2$ (dollars).',
              'Labor constraint: $2x_1 + x_2 \\le 12$.',
              'Flour constraint: $3x_1 + x_2 \\le 9$.',
              'Sign restrictions: $x_1, x_2 \\ge 0$.'
            ],
            answer:'<strong>LP:</strong> Max $Z = 40x_1 + 25x_2$ s.t. $2x_1 + x_2 \\le 12$, $3x_1 + x_2 \\le 9$, $x_1, x_2 \\ge 0$. Always 4 ingredients in a formulation: variables, objective, technological constraints, sign restrictions.'
          },
          { q:'Solve graphically: Max $Z = 3x + 5y$ s.t. $x \\le 4$, $2y \\le 12$, $3x + 2y \\le 18$, $x, y \\ge 0$.',
            steps:[
              'Constraints as equalities (lines): $x = 4$ (vertical), $y = 6$ (horizontal), $3x + 2y = 18$.',
              'Feasible region: bounded by axes + these three lines.',
              'Corners: $(0,0)$, $(4,0)$, $(4,3)$ where $x=4$ meets $3x+2y=18$, $(2,6)$ where $y=6$ meets $3x+2y=18$, $(0,6)$.',
              'Evaluate $Z$: $Z(0,0)=0$, $Z(4,0)=12$, $Z(4,3)=27$, $Z(2,6)=36$, $Z(0,6)=30$.'
            ],
            answer:'Maximum at $(2, 6)$ with $Z = 36$. <strong>Always tabulate all corners</strong> — eyeballing is a common error.'
          },
          { q:'For the LP Max $Z = 6x_1 + 4x_2$ s.t. $3x_1 + 2x_2 \\le 12$, $x_1 + x_2 \\le 5$, $x_1, x_2 \\ge 0$. Identify all optimal solutions.',
            steps:[
              'Notice: objective slope $-6/4 = -3/2$ matches constraint 1 slope $-3/2$.',
              'Find corners: $(0,0), (4,0), (2,3)$ where both constraints bind, $(0,5)$.',
              'Evaluate $Z$: $(0,0)=0, (4,0)=24, (2,3)=24, (0,5)=20$.',
              'Two corners tie at $Z=24$: $(4,0)$ and $(2,3)$.',
              'Since objective is parallel to the binding constraint $3x_1+2x_2=12$, the ENTIRE edge from $(4,0)$ to $(2,3)$ is optimal.'
            ],
            answer:'<strong>Alternative optima</strong>: every point on the segment from $(4,0)$ to $(2,3)$ gives $Z = 24$. Parametrically: $(x_1, x_2) = (4-2t, 3t)$ for $t \\in [0, 1]$.'
          }
        ]
      },
      { n:21, title:'Lectures 20-21 — Simplex Method (Phase I & II)',
        learn:['Convert any LP to standard form with slack / surplus / artificial variables.','Set up the initial simplex tableau.','Pick entering and leaving variables correctly.','Iterate until optimal.','Detect unbounded and infeasible LPs from the tableau.'],
        theory:[
          { h:'📺 Watch first — Patrick JMT · Simplex Method (15 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/M8POtpPtQZc" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Exam-style worked simplex problem with full tableau iterations. Watch twice.</p>' },
          { h:'Standard form conversion', b:'<strong>$\\le$ constraint:</strong> add slack $s_i \\ge 0$ to make it $=$. E.g., $2x_1 + x_2 \\le 8$ becomes $2x_1 + x_2 + s_1 = 8$. <strong>$\\ge$ constraint:</strong> subtract surplus, add artificial: $2x_1 + x_2 - s_1 + a_1 = 10$. <strong>$=$ constraint:</strong> add artificial only.' },
          { h:'Initial BFS', b:'For an all-$\\le$ max problem: set decision variables $= 0$, slacks $= b_i$. This corner $(x = 0, s = b)$ is always feasible (since $b_i \\ge 0$).' },
          { h:'Entering variable (max problem)', b:'Look at the bottom $C_j - Z_j$ (or $-Z_j$) row. The most NEGATIVE entry indicates the variable that improves $Z$ fastest per unit increase. Bring it into the basis.' },
          { h:'Leaving variable (min-ratio test)', b:'For the entering column $k$: for each row $i$ with $a_{ik} > 0$, compute the ratio $b_i / a_{ik}$. The row with the smallest non-negative ratio leaves. IGNORE rows with $a_{ik} \\le 0$. If ALL ratios are unusable, the LP is unbounded.' },
          { h:'Pivot operation', b:'Make the pivot element $= 1$ (divide pivot row by pivot). Then use that row to zero out all other entries in the entering column (Gauss-Jordan). Recompute $Z_j$ and $C_j - Z_j$ rows.' },
          { h:'Stopping conditions', b:'<strong>Optimal:</strong> all $C_j - Z_j \\ge 0$ in max problem (no improvement available). <strong>Unbounded:</strong> entering column has all entries $\\le 0$. <strong>Alternative optima:</strong> at optimum, a non-basic variable has $C_j - Z_j = 0$. <strong>Infeasible:</strong> artificial variable still in basis at non-zero value at optimum.' }
        ],
        examples:[
          { q:'Convert to standard form and set up the initial simplex tableau: Max $Z = 3x_1 + 2x_2$ s.t. $x_1 + x_2 \\le 4$, $x_1 + 3x_2 \\le 6$, $x_1, x_2 \\ge 0$.',
            steps:[
              'Add slack variables: $x_1 + x_2 + s_1 = 4$ and $x_1 + 3x_2 + s_2 = 6$.',
              'Initial BFS: $x_1 = x_2 = 0$, $s_1 = 4$, $s_2 = 6$, $Z = 0$.',
              'Initial tableau: $\\begin{array}{c|cccc|c} & x_1 & x_2 & s_1 & s_2 & b \\\\\\hline s_1 & 1 & 1 & 1 & 0 & 4 \\\\ s_2 & 1 & 3 & 0 & 1 & 6 \\\\\\hline C_j-Z_j & 3 & 2 & 0 & 0 & 0 \\end{array}$'
            ],
            answer:'Initial BFS at the origin with $Z=0$. Slacks $s_1=4, s_2=6$ are basic. Ready for iteration.'
          },
          { q:'Continue the simplex from the previous tableau. Perform iterations until optimal.',
            steps:[
              'Iteration 1: Most positive $C_j - Z_j$ is $3$ (col $x_1$) → $x_1$ enters. (Note: equivalent to saying "most negative $-Z_j$".)',
              'Min-ratio: $4/1 = 4$ (row $s_1$), $6/1 = 6$ (row $s_2$). Smallest is 4 → $s_1$ leaves. Pivot = $a_{11}=1$.',
              'After pivot: $\\begin{array}{c|cccc|c} & x_1 & x_2 & s_1 & s_2 & b \\\\\\hline x_1 & 1 & 1 & 1 & 0 & 4 \\\\ s_2 & 0 & 2 & -1 & 1 & 2 \\\\\\hline C_j-Z_j & 0 & -1 & -3 & 0 & -12 \\end{array}$',
              'Iteration 2: All $C_j - Z_j \\le 0$? No — wait, for MAX we stop when all $C_j - Z_j \\le 0$. Here all are $\\le 0$. Stop.',
              'Read off solution: $x_1 = 4$, $x_2 = 0$, $Z = 12$.'
            ],
            answer:'Optimal: $x_1 = 4,\\;x_2 = 0,\\;Z = 12$. (Convention check: some textbooks use $Z_j - C_j$ row with stopping rule "all $\\ge 0$ for max". Same answer, signs flipped. Use Lay/Budnick\'s convention from your course.)'
          },
          { q:'A simplex tableau for max has $C_j - Z_j = (0, 4, 0, 0, -2, 0)$ and the entering column $x_2$ has entries $(-1, -3, 2)$ in rows $1, 2, 3$ with RHS $(5, 3, 8)$. Determine next step.',
            steps:[
              'Entering variable: $x_2$ has the most positive $C_j - Z_j = 4$.',
              'Min-ratio test: row 1 has $a_{12} = -1$ → skip. Row 2 has $a_{22} = -3$ → skip. Row 3 has $a_{32} = 2 > 0$, ratio $= 8/2 = 4$.',
              'Only one row eligible → row 3 leaves. Pivot element $a_{32} = 2$.',
              'Note: if all rows had $a_{i2} \\le 0$, the LP would be unbounded.'
            ],
            answer:'Row 3 leaves. Pivot on entry $2$ in $(x_2, \\text{row 3})$. Continue iterating.'
          },
          { q:'A simplex tableau shows entering column with all entries $\\le 0$ and the corresponding $C_j - Z_j > 0$. What conclusion?',
            steps:[
              'Entering variable would improve $Z$, but the min-ratio test produces NO valid leaving row.',
              'This means we can increase the entering variable indefinitely while staying feasible.',
              '$Z$ grows without bound.'
            ],
            answer:'<strong>LP is unbounded</strong> — no finite optimum. Likely a missing constraint in formulation.'
          }
        ]
      },
      { n:24, title:'Lectures 23-24 — The Dual Problem',
        learn:['Write the dual of any primal LP.','Use weak and strong duality.','Interpret dual variables as shadow prices.','Use complementary slackness.'],
        theory:[
          { h:'Building the dual (max primal → min dual)', b:'Primal: Max $Z = \\mathbf{c}^T\\mathbf{x}$ s.t. $A\\mathbf{x} \\le \\mathbf{b}, \\mathbf{x} \\ge 0$. Dual: Min $W = \\mathbf{b}^T\\mathbf{y}$ s.t. $A^T\\mathbf{y} \\ge \\mathbf{c}, \\mathbf{y} \\ge 0$. <strong>Rules:</strong> #dual vars = #primal constraints. #dual constraints = #primal vars. RHS swaps with objective coefficients. Constraint matrix transposes. Max ↔ Min, $\\le$ ↔ $\\ge$.' },
          { h:'Weak Duality', b:'For any feasible $\\mathbf{x}$ in primal and any feasible $\\mathbf{y}$ in dual: $\\mathbf{c}^T\\mathbf{x} \\le \\mathbf{b}^T\\mathbf{y}$. So any dual feasible value is an upper bound on every primal feasible value (for max primal).' },
          { h:'Strong Duality', b:'If EITHER primal or dual has an optimal solution, both do, and their optimal objective values are EQUAL: $Z^* = W^*$.' },
          { h:'Shadow prices', b:'Optimal dual variables $y_i^*$ = the rate at which the primal optimum $Z^*$ changes per unit increase in the $i$-th constraint\'s RHS $b_i$. Highly useful in business: tells you which resource is most valuable to expand.' },
          { h:'Complementary slackness', b:'At optimum: for each $i$, either constraint $i$ is binding (slack $= 0$) OR dual variable $y_i^* = 0$. Equivalently: $y_i^*(b_i - A_i\\mathbf{x}^*) = 0$. Used to recover primal from dual and vice versa.' }
        ],
        examples:[
          { q:'Write the dual of: Max $Z = 5x_1 + 4x_2 + 3x_3$ s.t. $2x_1 + 3x_2 + x_3 \\le 5$, $4x_1 + x_2 + 2x_3 \\le 11$, $3x_1 + 4x_2 + 2x_3 \\le 8$, $x_j \\ge 0$.',
            steps:[
              'Primal has 3 constraints → dual has 3 variables $y_1, y_2, y_3 \\ge 0$.',
              'Primal has 3 variables → dual has 3 constraints (one per primal variable).',
              'Dual objective: minimize $W = 5 y_1 + 11 y_2 + 8 y_3$ (primal RHS becomes dual objective coefficients).',
              'Dual constraints: for $x_1$: $2 y_1 + 4 y_2 + 3 y_3 \\ge 5$. For $x_2$: $3 y_1 + y_2 + 4 y_3 \\ge 4$. For $x_3$: $y_1 + 2 y_2 + 2 y_3 \\ge 3$. (Coefficients are columns of $A$ = rows of $A^T$.)'
            ],
            answer:'<strong>Dual:</strong> Min $W = 5y_1 + 11y_2 + 8y_3$ s.t. $2y_1 + 4y_2 + 3y_3 \\ge 5$, $3y_1 + y_2 + 4y_3 \\ge 4$, $y_1 + 2y_2 + 2y_3 \\ge 3$, $y_i \\ge 0$.'
          },
          { q:'Primal optimal solution gives $Z^* = 13$ with constraint 1 slack $= 2$ and constraint 2 slack $= 0$. What can you say about dual variables $y_1^*$ and $W^*$?',
            steps:[
              'By strong duality: $W^* = Z^* = 13$.',
              'By complementary slackness: constraint 1 has slack 2 ≠ 0 → $y_1^* = 0$.',
              'Constraint 2 has slack 0 (binding) → $y_2^*$ may be nonzero (and likely is positive — that\'s the binding resource).'
            ],
            answer:'$W^* = 13$, $y_1^* = 0$ (constraint 1 is not binding, so its shadow price is zero — extra units of that resource have no value). $y_2^*$ is determined by the tableau.'
          }
        ]
      }
    ]
  },
  transassign: {
    title: 'Transportation & Assignment Models',
    intro: 'Four lectures (L25-28) plus degeneracy handling. Transportation: minimize shipping cost when supply and demand differ. Assignment: minimize cost of matching workers to jobs. Both are HIGH likelihood on the exam — Day 6 priority.',
    lectures: [
      { n:26, title:'Lectures 25-26 — Transportation Models (NWCM, Least Cost, VAM)',
        learn:['Set up a transportation table.','Balance an unbalanced problem with a dummy row/column.','Find an initial BFS by three methods.','Check optimality with MODI / u-v method.','Handle degeneracy with the epsilon trick.'],
        theory:[
          { h:'📺 Watch first — Joshua Emmanuel · VAM (11 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/O-CDt2OdJOk" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Clearest VAM walkthrough on YouTube. Watch then practice.</p>' },
          { h:'Problem structure', b:'$m$ sources with supplies $s_i$, $n$ destinations with demands $d_j$, shipping cost $c_{ij}$ per unit from source $i$ to destination $j$. Decision variables $x_{ij}\\ge 0$ = units shipped. <strong>Minimize</strong> $\\sum_{ij}c_{ij}x_{ij}$ subject to row sums = supply, column sums = demand.' },
          { h:'Balanced vs unbalanced', b:'Balanced: $\\sum s_i=\\sum d_j$ — solvable as-is. Unbalanced: add a DUMMY row (extra supply, zero costs) or DUMMY column (extra demand, zero costs) until balanced. Dummy variables are "shipped to nowhere" or "received from nowhere" — they don\'t actually move.' },
          { h:'BFS count', b:'A basic feasible solution has exactly $m+n-1$ allocated cells (basic variables). FEWER than that = <strong>degenerate</strong>. Need to insert $\\epsilon\\to 0^+$ in some unallocated cell to maintain count.' },
          { h:'Three initial BFS methods', b:'<strong>(1) NWCM:</strong> start at top-left, allocate $\\min(s_i,d_j)$, satisfied row or column gets struck out, move right or down. Simple, ignores costs. <strong>(2) Least Cost:</strong> at each step pick the cell with the smallest cost, allocate max possible. <strong>(3) VAM (Vogel\'s Approximation Method):</strong> for each row and column compute a penalty = (2nd smallest cost) - (smallest cost). Pick the row/column with the LARGEST penalty, allocate to its cheapest cell. Repeat with updated table. VAM usually starts closest to optimum.' },
          { h:'MODI (u-v) optimality check', b:'For each BASIC (allocated) cell, set $u_i+v_j=c_{ij}$. Fix $u_1=0$ and solve. For each NON-BASIC cell compute $\\Delta_{ij}=c_{ij}-(u_i+v_j)$. If all $\\Delta_{ij}\\ge 0$ → optimal. Else most negative $\\Delta$ enters basis; form a closed loop with alternating $+/-$ signs and reallocate using the minimum quantity in $-$ cells.' },
          { h:'Degeneracy', b:'If you have fewer than $m+n-1$ basic cells (during initial BFS or after reallocation), pick any unallocated cell that does NOT form a closed loop with existing basic cells and put $\\epsilon$ there. Treat $\\epsilon$ as basic for MODI calculations. At the end, $\\epsilon=0$ in the actual answer.' }
        ],
        examples:[
          { q:'<strong>NWCM example.</strong> Supplies: $s=(10, 15, 25)$. Demands: $d=(15, 10, 25)$. Costs: $\\begin{pmatrix}2&3&5\\\\4&1&2\\\\3&4&3\\end{pmatrix}$. Find initial BFS by NWCM.',
            steps:[
              'Balanced? $10+15+25=50=15+10+25$ ✓.',
              'Start cell (1,1): $\\min(10,15)=10$. Allocate 10. Source 1 exhausted, demand 1 needs 5 more.',
              'Move to (2,1): $\\min(15,5)=5$. Allocate 5. Demand 1 satisfied, source 2 has 10 left.',
              'Move to (2,2): $\\min(10,10)=10$. Allocate 10. Demand 2 satisfied, source 2 has 0 left.',
              'Move to (2,3) is impossible — source 2 done. Move to (3,2): $\\min(25,0)=0$ — column done.',
              'Actually move directly to (3,3): $\\min(25,25)=25$. Done.',
              'Allocations: $x_{11}=10,\\;x_{21}=5,\\;x_{22}=10,\\;x_{33}=25$. Cells used: 4. Check: $m+n-1=3+3-1=5$. Wait — only 4. <strong>Degenerate.</strong>',
              'Insert $\\epsilon$ in an unallocated cell (e.g., $x_{23}$) to maintain count.',
              'Cost = $2(10)+4(5)+1(10)+3(25)=20+20+10+75=125$.'
            ],
            answer:'BFS cost $=125$. <strong>Degenerate</strong> — needed $\\epsilon$ at $(2,3)$. Not yet optimal; run MODI to check.'
          },
          { q:'<strong>VAM example.</strong> Same supplies/demands, find initial BFS via VAM.',
            steps:[
              'Row penalties (2nd smallest − smallest): Row 1: $3-2=1$. Row 2: $2-1=1$. Row 3: $3-3=0$.',
              'Column penalties: Col 1: $3-2=1$. Col 2: $3-1=2$. Col 3: $3-2=1$.',
              'Largest penalty: col 2 (= 2). Smallest cost in col 2: $c_{22}=1$. Allocate $\\min(s_2,d_2)=\\min(15,10)=10$.',
              'Col 2 done. Update remaining table; recompute penalties.',
              'New penalties (excluding col 2): Row 1: $5-2=3$. Row 2: $4-2=2$. Row 3: $3-3=0$. Cols 1, 3 same as before.',
              'Largest now Row 1 = 3. Smallest cost in row 1: $c_{11}=2$. Allocate $\\min(10,15)=10$.',
              'Row 1 done. Continue similarly until all allocated.',
              'Final allocations (typical VAM): $x_{11}=10,\\;x_{22}=10,\\;x_{23}=5,\\;x_{31}=5,\\;x_{33}=20$. (5 cells = $m+n-1$, non-degenerate.)',
              'Cost = $2(10)+1(10)+2(5)+3(5)+3(20)=20+10+10+15+60=115$.'
            ],
            answer:'BFS cost $=115$ — better than NWCM\'s $125$. Run MODI to check optimality.'
          },
          { q:'<strong>MODI check.</strong> Given the VAM BFS above, verify it\'s optimal.',
            steps:[
              'Basic cells: $(1,1), (2,2), (2,3), (3,1), (3,3)$. Set $u_1=0$.',
              'From $(1,1)$: $u_1+v_1=c_{11}=2\\Rightarrow v_1=2$.',
              'From $(3,1)$: $u_3+v_1=c_{31}=3\\Rightarrow u_3=1$.',
              'From $(3,3)$: $u_3+v_3=c_{33}=3\\Rightarrow v_3=2$.',
              'From $(2,3)$: $u_2+v_3=c_{23}=2\\Rightarrow u_2=0$.',
              'From $(2,2)$: $u_2+v_2=c_{22}=1\\Rightarrow v_2=1$.',
              'Now $\\Delta_{ij}=c_{ij}-(u_i+v_j)$ for non-basic cells:',
              '$\\Delta_{12}=3-(0+1)=2,\\;\\Delta_{13}=5-(0+2)=3,\\;\\Delta_{21}=4-(0+2)=2,\\;\\Delta_{32}=4-(1+1)=2$.',
              'All $\\Delta\\ge 0$.'
            ],
            answer:'<strong>Optimal.</strong> VAM solution stands. Total min cost = 115.'
          },
          { q:'<strong>Degeneracy example.</strong> A $3\\times 3$ BFS has only 4 basic cells. Show how to add $\\epsilon$.',
            steps:[
              'Need $m+n-1=3+3-1=5$ basic cells. Have 4. Missing 1.',
              'Pick any non-basic cell that does NOT close a loop with existing basic cells. Cells in row/column where both supply and demand are NOT yet covered by current basic cells.',
              'Assign $\\epsilon\\to 0^+$ to that cell (treat as basic).',
              'During MODI: include $\\epsilon$ cell in $u_i+v_j=c_{ij}$ equations.',
              'At final answer: $\\epsilon=0$ — drop it. Total cost unchanged.'
            ],
            answer:'$\\epsilon$ trick keeps the BFS count valid for MODI without affecting cost.'
          }
        ]
      },
      { n:28, title:'Lectures 27-28 — Assignment Problem & Hungarian Method',
        learn:['Recognize assignment as a special transportation problem.','Apply the Hungarian Method end-to-end.','Handle unbalanced assignment with dummies.'],
        theory:[
          { h:'📺 Watch first — Joshua Emmanuel · Hungarian Method (9 min)', b:'<div class="aspect-video my-2"><iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/cQ5MsiGaDY8" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p class="text-xs text-slate-500 mt-2">Exact algorithm walkthrough with a worked example. Watch and copy his steps.</p>' },
          { h:'Setup', b:'$n$ workers and $n$ jobs. Cost $c_{ij}$ of assigning worker $i$ to job $j$. Each worker → exactly 1 job. Each job → exactly 1 worker. Minimize total cost. (Special transportation with supply = demand = 1 everywhere.)' },
          { h:'Hungarian Method — full algorithm', b:'<strong>Step 1:</strong> Subtract the smallest entry of each row from every entry in that row. <strong>Step 2:</strong> Subtract the smallest entry of each column from every entry in that column. <strong>Step 3:</strong> Cover all zeros with the MINIMUM number of horizontal or vertical lines. <strong>Step 4:</strong> If lines $=n$, an optimal assignment exists in the zero positions — assign accordingly. <strong>Step 5:</strong> If lines $<n$: find the smallest UNCOVERED entry $k$. Subtract $k$ from every uncovered cell. ADD $k$ to every entry that is covered TWICE (intersection of two lines). Go to Step 3.' },
          { h:'Unbalanced', b:'If workers ≠ jobs, add dummy workers or jobs with zero cost until square. Dummy assignments mean "this worker stays idle" or "this job goes unfilled."' }
        ],
        examples:[
          { q:'<strong>3×3 assignment.</strong> Cost matrix $C=\\begin{pmatrix}9&2&7\\\\6&4&3\\\\5&8&1\\end{pmatrix}$. Find optimal assignment via Hungarian Method.',
            steps:[
              '<strong>Step 1 (row mins):</strong> row mins are 2, 3, 1. Subtract: $\\begin{pmatrix}7&0&5\\\\3&1&0\\\\4&7&0\\end{pmatrix}$.',
              '<strong>Step 2 (col mins):</strong> col mins are 3, 0, 0. Subtract: $\\begin{pmatrix}4&0&5\\\\0&1&0\\\\1&7&0\\end{pmatrix}$.',
              '<strong>Step 3 (cover zeros):</strong> Zeros at $(1,2),(2,1),(2,3),(3,3)$. Try covering with 2 lines: row 2 (covers $(2,1)$ and $(2,3)$), col 2 (covers $(1,2)$), col 3 (covers $(3,3)$). That\'s 3 lines. Or: row 2 + col 2 + col 3 = 3 lines. Or row 2 + col 3 covers $(2,1),(2,3),(3,3)$ but misses $(1,2)$. So minimum is 3 lines.',
              '<strong>Step 4:</strong> Lines = 3 = $n$. Optimal assignment exists in zeros.',
              'Assign: $(1,2)$ → worker 1 to job 2 (cost 2). $(2,1)$ → worker 2 to job 1 (cost 6). $(3,3)$ → worker 3 to job 3 (cost 1).',
              'Total cost = $2+6+1=9$.'
            ],
            answer:'<strong>Optimal assignment:</strong> Worker 1 → Job 2, Worker 2 → Job 1, Worker 3 → Job 3. Total cost = 9.'
          },
          { q:'<strong>When lines < n.</strong> After step 2 you get matrix $\\begin{pmatrix}0&3&5\\\\4&0&2\\\\3&1&0\\\\\\end{pmatrix}$. Zeros covered by 2 lines (row 1 + col 3 covers all). Apply Step 5.',
            steps:[
              'Lines = 2 < n = 3. Find smallest UNCOVERED entry.',
              'Uncovered cells: $(2,1),(2,2),(3,1),(3,2)$ with values 4, 0, 3, 1. Wait — $(2,2)$ is uncovered with value 0? Let me re-check: row 1 + col 3. Then row 1 covers (1,1),(1,2),(1,3). Col 3 covers (2,3),(3,3). Uncovered: (2,1),(2,2),(3,1),(3,2). Values: 4, 0, 3, 1. Smallest = 0.',
              'Smallest uncovered = 0 means there\'s already a zero we missed — likely the line cover was wrong. Should be 3 lines minimum (since there are 3 zeros not in same row/col).',
              'Re-cover: row 1 (zero at $(1,1)$), col 2 (zero at $(2,2)$), col 3 (zero at $(3,3)$) = 3 lines.',
              'Lines = 3 = n → assign. Worker 1 → Job 1, Worker 2 → Job 2, Worker 3 → Job 3.'
            ],
            answer:'Always recheck line count — it equals minimum needed, not first cover you try. Final: optimal assignment uses the 3 diagonal zeros.'
          }
        ]
      }
    ]
  }
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
  { t:'eigen', q:'When diagonalizable?', a:'iff n LI eigenvectors. Or: geo mult = alg mult for every eigenvalue.' },
  { t:'eigen', q:'3×3 with 3 distinct eigenvalues — diag?', a:'Yes always.' },
  { t:'eigen', q:'0 as eigenvalue — meaning?', a:'⇔ det A = 0 ⇔ A is singular.' },
  { t:'eigen', q:'Why $A^k$ easy when diagonalized?', a:'A^k = PD^kP⁻¹. Just raise diagonal entries to k.' },
  { t:'eigen', q:'Markov steady-state vector?', a:'Solve (M − I)p = 0 with Σpᵢ = 1. Eigenvector for λ = 1.' },
  { t:'eigen', q:'Stochastic matrix — columns sum to?', a:'1 (each column is a probability vector).' },
  { t:'lp', q:'Fundamental Theorem of LP?', a:'If LP has an optimum, at least one is at a CORNER of feasible region.' },
  { t:'lp', q:'Slack variable = 0 means?', a:'Constraint is BINDING — optimum lies on it.' },
  { t:'lp', q:'Simplex entering variable (max)?', a:'Most NEGATIVE Cⱼ − Zⱼ (or most positive if using opposite convention).' },
  { t:'lp', q:'Simplex leaving variable?', a:'Min non-neg ratio bᵢ/aᵢⱼ. Ignore aᵢⱼ ≤ 0 rows.' },
  { t:'lp', q:'Simplex UNBOUNDED when?', a:'Entering column all ≤ 0 → no leaving row.' },
  { t:'lp', q:'≤ constraint needs?', a:'Slack ≥ 0.' },
  { t:'lp', q:'Dual of max cᵀx s.t. Ax ≤ b?', a:'min bᵀy s.t. Aᵀy ≥ c, y ≥ 0.' },
  { t:'lp', q:'Strong Duality?', a:'Primal & dual optimal values are equal.' },
  { t:'lp', q:'Shadow price = ?', a:'Optimal dual variable yᵢ* = rate of change of optimal Z per unit increase in constraint i RHS bᵢ.' },
  { t:'transassign', q:'Balanced transportation?', a:'Σsupply = Σdemand. Else add dummy row/col.' },
  { t:'transassign', q:'Three initial BFS methods?', a:'North-West Corner; Least Cost; VAM (best).' },
  { t:'transassign', q:'VAM penalty?', a:'(2nd smallest − smallest cost) per row/col.' },
  { t:'transassign', q:'MODI: uᵢ + vⱼ for which cells?', a:'BASIC (allocated) cells only. Set u₁ = 0.' },
  { t:'transassign', q:'Degeneracy in transportation?', a:'Basic cells < m + n − 1. Insert ε.' },
  { t:'transassign', q:'Hungarian Method core?', a:'Subtract row min, col min, cover zeros with min lines. Lines = n → done.' }
];

const QUIZ = [
  { t:'systems', q:'4×6 augmented in RREF, pivots cols 1, 2, 4. Free variables?', o:['1','2','3','4'], c:1, e:'Cols 3, 5 free.' },
  { t:'systems', q:'Row op that does NOT change solution set?', o:['Add multiple','Swap','Multiply by 0','Multiply by nonzero'], c:2, e:'×0 destroys info.' },
  { t:'systems', q:'Ax=b consistent for every b means A has...', o:['square','pivot every row','pivot every column','invertible'], c:1, e:'Span ℝᵐ.' },
  { t:'systems', q:'Homogeneous always has...', o:['Zero','One trivial','At least trivial','Infinite'], c:2, e:'x=0 always.' },
  { t:'systems', q:'Inconsistency signal?', o:['All-zero row','Fewer pivots','[0 0 0 | 5]','Free variable'], c:2, e:'0 = 5.' },
  { t:'indep', q:'6 vectors in ℝ⁴?', o:['Independent','Dependent','Need info','Sometimes'], c:1, e:'p > n.' },
  { t:'indep', q:'{v₁, v₂, 0} is...', o:['Independent','Dependent','Either','Invalid'], c:1, e:'Zero vector.' },
  { t:'indep', q:'T: ℝ³ → ℝ² matrix size?', o:['3×2','2×3','3×3','2×2'], c:1, e:'m×n.' },
  { t:'indep', q:'T 1-1 iff columns of A are...', o:['dependent','span ℝᵐ','independent','orthogonal'], c:2, e:'Ax=0 trivial only.' },
  { t:'indep', q:'T onto iff A has...', o:['pivot every row','pivot every column','more rows','no zero cols'], c:0, e:'Span ℝᵐ.' },
  { t:'matrix', q:'A is 3×4, B is 4×2. AB size?', o:['3×2','4×4','3×4','undefined'], c:0, e:'(rows A)×(cols B).' },
  { t:'matrix', q:'(AB)ᵀ = ?', o:['AᵀBᵀ','BᵀAᵀ','Only if square','Only if commute'], c:1, e:'Reverses order.' },
  { t:'matrix', q:'A=[[2,1],[3,4]]: det, A⁻¹?', o:['det=5, (1/5)[[4,−1],[−3,2]]','det=11','det=5, (1/5)[[4,−3],[−1,2]]','det=−5'], c:0, e:'det=8−3=5.' },
  { t:'matrix', q:'NOT equivalent to A invertible:', o:['det ≠ 0','Ax=0 trivial','Columns dependent','n pivots'], c:2, e:'Invertible ⇔ INDEPENDENT.' },
  { t:'matrix', q:'(3A)⁻¹ = ?', o:['3 A⁻¹','(1/3) A⁻¹','A⁻¹/9','(1/3) Aᵀ'], c:1, e:'(cA)⁻¹ = (1/c) A⁻¹.' },
  { t:'det', q:'det[[1,2,3],[0,4,5],[0,0,6]]?', o:['6','24','30','42'], c:1, e:'1·4·6.' },
  { t:'det', q:'Swap two rows — det?', o:['Unchanged','×0','×(−1)','Doubled'], c:2, e:'Flips sign.' },
  { t:'det', q:'For 3×3 A, det(2A)?', o:['2 det A','4 det A','6 det A','8 det A'], c:3, e:'2³=8.' },
  { t:'det', q:'A 4×4 det = 3. det(A⁻¹)?', o:['3','−3','1/3','9'], c:2, e:'1/det.' },
  { t:'det', q:'A singular iff?', o:['det > 0','det < 0','det = 0','det = 1'], c:2, e:'Definition.' },
  { t:'eigen', q:'A=[[3,0],[1,2]]. Eigenvalues?', o:['3 and 2','3 and 1','2 and 1','5 and 5'], c:0, e:'Triangular.' },
  { t:'eigen', q:'For A above, eigenvector for λ=2?', o:['(0,1)','(1,0)','(1,1)','(1,−1)'], c:0, e:'x₁=0 free x₂.' },
  { t:'eigen', q:'Sum of eigenvalues?', o:['det A','trace A','rank A','number'], c:1, e:'Trace.' },
  { t:'eigen', q:'A invertible iff?', o:['all eigenvalues positive','0 NOT an eigenvalue','all distinct','diagonalizable'], c:1, e:'det ≠ 0.' },
  { t:'eigen', q:'A=PDP⁻¹ with D=diag(2,3). A¹⁰?', o:['P diag(2¹⁰,3¹⁰) P⁻¹','P¹⁰D¹⁰P⁻¹⁰','D¹⁰','diag(2¹⁰,3¹⁰)'], c:0, e:'Aᵏ = PDᵏP⁻¹.' },
  { t:'eigen', q:'Markov steady-state p satisfies?', o:['Mp=0','(M−I)p=0 and Σpᵢ=1','p=0','Mp=2p'], c:1, e:'Eigenvector for λ=1.' },
  { t:'lp', q:'Graphical LP optimum (unique) at...', o:['centroid','corner','any boundary','origin'], c:1, e:'Fundamental theorem.' },
  { t:'lp', q:'Simplex entering (max)?', o:['largest positive Cⱼ−Zⱼ','most negative Cⱼ−Zⱼ','smallest ratio','largest obj coeff'], c:1, e:'Most negative.' },
  { t:'lp', q:'Min-ratio: rows with aᵢⱼ ≤ 0?', o:['Use abs','Ignore','Use negative','Optimality'], c:1, e:'Ignore.' },
  { t:'lp', q:'Simplex UNBOUNDED when?', o:['All Cⱼ−Zⱼ ≥ 0','Entering col all ≤ 0','Tableau stuck','Artificial in basis'], c:1, e:'No leaving row.' },
  { t:'lp', q:'≤ constraint needs?', o:['surplus','artificial','slack','dummy'], c:2, e:'Slack ≥ 0.' },
  { t:'lp', q:'Primal max 2 vars 2 constraints. Dual?', o:['2 vars, 2 constraints, min','2,2,max','3,3,min','1,1'], c:0, e:'Swap.' },
  { t:'lp', q:'Strong Duality?', o:['Primal ≥ dual','Primal = dual at optimum','Iff dual solvable','Sanity check'], c:1, e:'Equal optimum values.' },
  { t:'transassign', q:'Supply 60, demand 50. Balance:', o:['Dummy demand 10','Dummy supply 10','Scale','Infeasible'], c:0, e:'Excess supply → dummy dest.' },
  { t:'transassign', q:'Lowest-cost starting method?', o:['NWC','Least Cost','VAM','Random'], c:2, e:'VAM uses opportunity costs.' },
  { t:'transassign', q:'MODI: u₁=0, then?', o:['cᵢⱼ = uᵢ − vⱼ non-basic','cᵢⱼ = uᵢ + vⱼ basic','min cⱼᵢ','dual of LP'], c:1, e:'Basic cells.' },
  { t:'transassign', q:'MODI optimal when?', o:['All Δ ≥ 0 non-basic','All cᵢⱼ = 0','All Δ = 0 basic','Table square'], c:0, e:'No shift reduces cost.' },
  { t:'transassign', q:'4-worker Hungarian optimal: lines = ?', o:['4','rank','any zero row','col min'], c:0, e:'Lines = n.' }
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
