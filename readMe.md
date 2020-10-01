how to configure typescript for websites and applications. At least one way anyways.

Pour créer le fichier tsconfig.json: faut démarrer le scripte 
```tsc --init```
D'ici. On peut configurer le point d'entrée qui contient notre/nos fichier(s) transcipt avec le property ``rootDir`` et le point converti avec la propriété ``outDir``

it is a lot like my gulp workflow for websites.

Quelque chose important: si on met la propriété ``include`` - dont la valeur c'est un tableau, on précise qu'on veut que les fichiers dans le(s) dossier(s), qui sont les noms des valeurs du tableu, soient ceux compilés et distribués. Dans notre exemple, on veut que juste les fichiers dans le dossier "src" soient compilés.

Only difference is the "include" line in the tsconfig.json. It says, only compile and distributes the typescript file in the folder names defined in the array. (you can take a look at the last line in the tsconfig.json file)
while you're there. look at the file overall.6-better-workflow-n-tsconfig