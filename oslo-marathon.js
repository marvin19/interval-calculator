const trackPoints = [
    { lat: 59.911614093, lon: 10.733292590, altitude: 3.8 },
    { lat: 59.911673677, lon: 10.733014053, altitude: 3.9 },
    { lat: 59.912030000, lon: 10.731450000, altitude: 4.1 },
    { lat: 59.912160000, lon: 10.731000000, altitude: 4.8 },
    { lat: 59.912500000, lon: 10.729580000, altitude: 7.5 },
    { lat: 59.912660000, lon: 10.728950000, altitude: 8.1 },
    { lat: 59.912820000, lon: 10.728340000, altitude: 7.6 },
    { lat: 59.913140000, lon: 10.727330000, altitude: 13.3 },
    { lat: 59.913110000, lon: 10.727020000, altitude: 13.2 },
    { lat: 59.912520000, lon: 10.725250000, altitude: 10.6 },
    { lat: 59.912450000, lon: 10.725070000, altitude: 10.0 },
    { lat: 59.912490000, lon: 10.724970000, altitude: 10.1 },
    { lat: 59.913100000, lon: 10.723560000, altitude: 11.8 },
    { lat: 59.913100000, lon: 10.723430000, altitude: 11.5 },
    { lat: 59.912020000, lon: 10.721950000, altitude: 9.0 },
    { lat: 59.911930000, lon: 10.721780000, altitude: 8.4 },
    { lat: 59.911930000, lon: 10.721640000, altitude: 8.0 },
    { lat: 59.911940000, lon: 10.721470000, altitude: 8.0 },
    { lat: 59.911940000, lon: 10.721090000, altitude: 7.9 },
    { lat: 59.911940000, lon: 10.719320000, altitude: 7.0 },
    { lat: 59.911930000, lon: 10.718590000, altitude: 6.8 },
    { lat: 59.911930000, lon: 10.718350000, altitude: 6.8 },
    { lat: 59.911900000, lon: 10.715310000, altitude: 9.7 },
    { lat: 59.911880000, lon: 10.714410000, altitude: 10.4 },
    { lat: 59.911830000, lon: 10.713520000, altitude: 12.6 },
    { lat: 59.911830000, lon: 10.713230000, altitude: 12.0 },
    { lat: 59.911910000, lon: 10.712650000, altitude: 12.6 },
    { lat: 59.911960000, lon: 10.712390000, altitude: 13.0 },
    { lat: 59.912530000, lon: 10.710690000, altitude: 8.5 },
    { lat: 59.912670000, lon: 10.710480000, altitude: 7.9 },
    { lat: 59.912850000, lon: 10.710460000, altitude: 8.3 },
    { lat: 59.912870000, lon: 10.709680000, altitude: 8.7 },
    { lat: 59.912960000, lon: 10.706700000, altitude: 11.0 },
    { lat: 59.913000000, lon: 10.706340000, altitude: 11.1 },
    { lat: 59.913060000, lon: 10.706040000, altitude: 12.0 },
    { lat: 59.913410000, lon: 10.704760000, altitude: 14.1 },
    { lat: 59.913580000, lon: 10.704120000, altitude: 13.5 },
    { lat: 59.913760000, lon: 10.703510000, altitude: 14.2 },
    { lat: 59.913980000, lon: 10.703080000, altitude: 10.7 },
    { lat: 59.914210000, lon: 10.702680000, altitude: 10.0 },
    { lat: 59.914390000, lon: 10.702310000, altitude: 8.4 },
    { lat: 59.914490000, lon: 10.702050000, altitude: 7.2 },
    { lat: 59.914660000, lon: 10.701680000, altitude: 5.1 },
    { lat: 59.914830000, lon: 10.701350000, altitude: 4.9 },
    { lat: 59.915070000, lon: 10.701020000, altitude: 4.3 },
    { lat: 59.915220000, lon: 10.700870000, altitude: 4.8 },
    { lat: 59.915370000, lon: 10.700790000, altitude: 5.3 },
    { lat: 59.915500000, lon: 10.700720000, altitude: 5.8 },
    { lat: 59.915620000, lon: 10.700690000, altitude: 6.2 },
    { lat: 59.916040000, lon: 10.700670000, altitude: 7.7 },
    { lat: 59.916250000, lon: 10.700570000, altitude: 8.5 },
    { lat: 59.916470000, lon: 10.700390000, altitude: 10.0 },
    { lat: 59.917320000, lon: 10.699500000, altitude: 12.1 },
    { lat: 59.917400000, lon: 10.699390000, altitude: 12.1 },
    { lat: 59.917460000, lon: 10.699240000, altitude: 12.6 },
    { lat: 59.917520000, lon: 10.699040000, altitude: 13.1 },
    { lat: 59.917810000, lon: 10.697570000, altitude: 14.1 },
    { lat: 59.917960000, lon: 10.697060000, altitude: 15.3 },
    { lat: 59.918090000, lon: 10.696770000, altitude: 15.0 },
    { lat: 59.918250000, lon: 10.696490000, altitude: 14.6 },
    { lat: 59.918360000, lon: 10.696340000, altitude: 15.2 },
    { lat: 59.918460000, lon: 10.696210000, altitude: 15.3 },
    { lat: 59.918650000, lon: 10.696030000, altitude: 15.2 },
    { lat: 59.918840000, lon: 10.695810000, altitude: 15.0 },
    { lat: 59.918990000, lon: 10.695590000, altitude: 15.0 },
    { lat: 59.919140000, lon: 10.695340000, altitude: 14.2 },
    { lat: 59.919260000, lon: 10.695090000, altitude: 15.1 },
    { lat: 59.919510000, lon: 10.694350000, altitude: 14.4 },
    { lat: 59.919590000, lon: 10.694260000, altitude: 14.4 },
    { lat: 59.919970000, lon: 10.694140000, altitude: 14.8 },
    { lat: 59.920250000, lon: 10.694140000, altitude: 15.0 },
    { lat: 59.920440000, lon: 10.694190000, altitude: 15.8 },
    { lat: 59.920530000, lon: 10.694230000, altitude: 16.2 },
    { lat: 59.920600000, lon: 10.694240000, altitude: 16.3 },
    { lat: 59.920660000, lon: 10.694220000, altitude: 16.2 },
    { lat: 59.920910000, lon: 10.694900000, altitude: 18.2 },
    { lat: 59.921110000, lon: 10.695320000, altitude: 19.2 },
    { lat: 59.921280000, lon: 10.695610000, altitude: 19.7 },
    { lat: 59.921680000, lon: 10.696090000, altitude: 21.0 },
    { lat: 59.922120000, lon: 10.696610000, altitude: 25.8 },
    { lat: 59.922430000, lon: 10.697060000, altitude: 27.1 },
    { lat: 59.922680000, lon: 10.697490000, altitude: 29.0 },
    { lat: 59.922980000, lon: 10.698160000, altitude: 30.7 },
    { lat: 59.923130000, lon: 10.698590000, altitude: 32.0 },
    { lat: 59.923250000, lon: 10.699040000, altitude: 31.3 },
    { lat: 59.923300000, lon: 10.699310000, altitude: 31.6 },
    { lat: 59.923330000, lon: 10.699600000, altitude: 32.6 },
    { lat: 59.923380000, lon: 10.700170000, altitude: 33.7 },
    { lat: 59.923370000, lon: 10.700650000, altitude: 34.0 },
    { lat: 59.923340000, lon: 10.700990000, altitude: 34.0 },
    { lat: 59.923120000, lon: 10.702200000, altitude: 35.4 },
    { lat: 59.922840000, lon: 10.703600000, altitude: 33.0 },
    { lat: 59.922830000, lon: 10.703790000, altitude: 33.0 },
    { lat: 59.922730000, lon: 10.704340000, altitude: 32.9 },
    { lat: 59.922720000, lon: 10.704460000, altitude: 32.8 },
    { lat: 59.922800000, lon: 10.704800000, altitude: 33.4 },
    { lat: 59.922810000, lon: 10.704960000, altitude: 33.7 },
    { lat: 59.924240000, lon: 10.707460000, altitude: 36.3 },
    { lat: 59.924820000, lon: 10.708440000, altitude: 38.0 },
    { lat: 59.925950000, lon: 10.710440000, altitude: 41.2 },
    { lat: 59.926940000, lon: 10.712060000, altitude: 43.4 },
    { lat: 59.927520000, lon: 10.710490000, altitude: 44.1 },
    { lat: 59.928370000, lon: 10.708370000, altitude: 43.2 },
    { lat: 59.928710000, lon: 10.707320000, altitude: 43.0 },
    { lat: 59.928860000, lon: 10.707070000, altitude: 43.5 },
    { lat: 59.929020000, lon: 10.706910000, altitude: 44.1 },
    { lat: 59.929160000, lon: 10.706860000, altitude: 44.3 },
    { lat: 59.929320000, lon: 10.706870000, altitude: 44.8 },
    { lat: 59.929480000, lon: 10.706980000, altitude: 45.0 },
    { lat: 59.929720000, lon: 10.707180000, altitude: 45.1 },
    { lat: 59.929800000, lon: 10.707200000, altitude: 45.4 },
    { lat: 59.929920000, lon: 10.707310000, altitude: 45.7 },
    { lat: 59.930170000, lon: 10.707460000, altitude: 46.6 },
    { lat: 59.930310000, lon: 10.707440000, altitude: 47.1 },
    { lat: 59.930430000, lon: 10.707390000, altitude: 47.5 },
    { lat: 59.930600000, lon: 10.707250000, altitude: 48.2 },
    { lat: 59.930760000, lon: 10.707030000, altitude: 49.4 },
    { lat: 59.930900000, lon: 10.706900000, altitude: 50.7 },
    { lat: 59.931260000, lon: 10.706380000, altitude: 52.6 },
    { lat: 59.931640000, lon: 10.705960000, altitude: 53.5 },
    { lat: 59.931940000, lon: 10.705660000, altitude: 55.6 },
    { lat: 59.932010000, lon: 10.705520000, altitude: 56.2 },
    { lat: 59.932100000, lon: 10.705500000, altitude: 56.6 },
    { lat: 59.932280000, lon: 10.705130000, altitude: 58.1 },
    { lat: 59.932470000, lon: 10.704660000, altitude: 58.8 },
    { lat: 59.932650000, lon: 10.704270000, altitude: 59.5 },
    { lat: 59.933040000, lon: 10.703580000, altitude: 59.0 },
    { lat: 59.933040000, lon: 10.703480000, altitude: 58.7 },
    { lat: 59.933070000, lon: 10.703380000, altitude: 58.2 },
    { lat: 59.933100000, lon: 10.703320000, altitude: 58.0 },
    { lat: 59.933150000, lon: 10.703310000, altitude: 58.0 },
    { lat: 59.933290000, lon: 10.703030000, altitude: 57.8 },
    { lat: 59.933440000, lon: 10.702610000, altitude: 56.0 },
    { lat: 59.933550000, lon: 10.702190000, altitude: 55.8 },
    { lat: 59.933690000, lon: 10.701540000, altitude: 55.7 },
    { lat: 59.934480000, lon: 10.697680000, altitude: 55.9 },
    { lat: 59.934610000, lon: 10.696840000, altitude: 54.6 },
    { lat: 59.934980000, lon: 10.693890000, altitude: 55.9 },
    { lat: 59.933580000, lon: 10.692640000, altitude: 50.8 },
    { lat: 59.932850000, lon: 10.691940000, altitude: 49.3 },
    { lat: 59.932070000, lon: 10.691230000, altitude: 46.5 },
    { lat: 59.931750000, lon: 10.691760000, altitude: 46.0 },
    { lat: 59.931040000, lon: 10.692850000, altitude: 44.9 },
    { lat: 59.930280000, lon: 10.693920000, altitude: 43.0 },
    { lat: 59.929385254, lon: 10.695094705, altitude: 46.6 },
    { lat: 59.929295787, lon: 10.695205251, altitude: 47.3 },
    { lat: 59.929198951, lon: 10.695319771, altitude: 47.9 },
    { lat: 59.929113156, lon: 10.695341234, altitude: 47.9 },
    { lat: 59.928790000, lon: 10.694960000, altitude: 47.2 },
    { lat: 59.928690000, lon: 10.694900000, altitude: 47.4 },
    { lat: 59.928570000, lon: 10.694890000, altitude: 47.8 },
    { lat: 59.928510000, lon: 10.694900000, altitude: 48.1 },
    { lat: 59.928220000, lon: 10.695050000, altitude: 50.4 },
    { lat: 59.928110000, lon: 10.695140000, altitude: 51.9 },
    { lat: 59.927970000, lon: 10.695350000, altitude: 52.6 },
    { lat: 59.927710000, lon: 10.696050000, altitude: 48.5 },
    { lat: 59.927500000, lon: 10.696700000, altitude: 46.0 },
    { lat: 59.927396634, lon: 10.697071399, altitude: 46.0 },
    { lat: 59.927345292, lon: 10.697338784, altitude: 45.6 },
    { lat: 59.927330998, lon: 10.697554179, altitude: 44.9 },
    { lat: 59.927283428, lon: 10.697681035, altitude: 44.5 },
    { lat: 59.927147313, lon: 10.697723017, altitude: 43.7 },
    { lat: 59.926685000, lon: 10.697717000, altitude: 40.6 },
    { lat: 59.925743866, lon: 10.697545292, altitude: 35.6 },
    { lat: 59.925322592, lon: 10.697608467, altitude: 33.3 },
    { lat: 59.925053369, lon: 10.697710881, altitude: 31.6 },
    { lat: 59.924789050, lon: 10.697930736, altitude: 31.0 },
    { lat: 59.924642962, lon: 10.698164925, altitude: 31.0 },
    { lat: 59.924586203, lon: 10.698457140, altitude: 30.8 },
    { lat: 59.924614916, lon: 10.698718607, altitude: 29.9 },
    { lat: 59.924677246, lon: 10.698938152, altitude: 29.4 },
    { lat: 59.924797000, lon: 10.699113000, altitude: 30.3 },
    { lat: 59.924852000, lon: 10.699183000, altitude: 30.4 },
    { lat: 59.925128000, lon: 10.699532000, altitude: 31.5 },
    { lat: 59.925720000, lon: 10.700300000, altitude: 33.6 },
    { lat: 59.925126000, lon: 10.700721000, altitude: 32.1 },
    { lat: 59.925034000, lon: 10.700788000, altitude: 31.4 },
    { lat: 59.924997000, lon: 10.700818000, altitude: 31.0 },
    { lat: 59.924759000, lon: 10.700987000, altitude: 30.1 },
    { lat: 59.924685000, lon: 10.701053000, altitude: 31.0 },
    { lat: 59.924628000, lon: 10.701094000, altitude: 31.9 },
    { lat: 59.924628000, lon: 10.701094000, altitude: 31.9 },
    { lat: 59.924254961, lon: 10.701364862, altitude: 34.0 },
    { lat: 59.923697255, lon: 10.701761436, altitude: 34.7 },
    { lat: 59.923517419, lon: 10.701892319, altitude: 35.6 },
    { lat: 59.923280000, lon: 10.701870000, altitude: 35.3 },
    { lat: 59.923260000, lon: 10.701790000, altitude: 34.8 },
    { lat: 59.923430000, lon: 10.700830000, altitude: 34.0 },
    { lat: 59.923450000, lon: 10.700340000, altitude: 34.0 },
    { lat: 59.923430000, lon: 10.699860000, altitude: 33.2 },
    { lat: 59.923350000, lon: 10.699180000, altitude: 31.0 },
    { lat: 59.923160000, lon: 10.698410000, altitude: 30.2 },
    { lat: 59.922920000, lon: 10.697820000, altitude: 28.9 },
    { lat: 59.922670000, lon: 10.697300000, altitude: 26.1 },
    { lat: 59.922420000, lon: 10.696860000, altitude: 25.5 },
    { lat: 59.922130000, lon: 10.696460000, altitude: 23.9 },
    { lat: 59.921350000, lon: 10.695520000, altitude: 19.0 },
    { lat: 59.921090000, lon: 10.695100000, altitude: 18.5 },
    { lat: 59.920790000, lon: 10.694380000, altitude: 16.8 },
    { lat: 59.920610000, lon: 10.693890000, altitude: 15.2 },
    { lat: 59.920150000, lon: 10.692350000, altitude: 12.3 },
    { lat: 59.919960000, lon: 10.692050000, altitude: 10.9 },
    { lat: 59.919960000, lon: 10.691900000, altitude: 10.7 },
    { lat: 59.919990000, lon: 10.691700000, altitude: 10.1 },
    { lat: 59.920200000, lon: 10.691050000, altitude: 8.8 },
    { lat: 59.920330000, lon: 10.690720000, altitude: 7.6 },
    { lat: 59.920460000, lon: 10.690450000, altitude: 6.5 },
    { lat: 59.921100000, lon: 10.689300000, altitude: 4.0 },
    { lat: 59.921330000, lon: 10.688790000, altitude: 2.9 },
    { lat: 59.922060000, lon: 10.686870000, altitude: 3.0 },
    { lat: 59.922140000, lon: 10.686400000, altitude: 3.0 },
    { lat: 59.922140000, lon: 10.686090000, altitude: 3.0 },
    { lat: 59.922110000, lon: 10.685760000, altitude: 3.1 },
    { lat: 59.921970000, lon: 10.684210000, altitude: 3.1 },
    { lat: 59.921840000, lon: 10.682840000, altitude: 3.4 },
    { lat: 59.921830000, lon: 10.682460000, altitude: 2.9 },
    { lat: 59.921790000, lon: 10.682310000, altitude: 2.6 },
    { lat: 59.921700000, lon: 10.682260000, altitude: 2.2 },
    { lat: 59.921120000, lon: 10.682240000, altitude: 2.1 },
    { lat: 59.921060000, lon: 10.682220000, altitude: 2.0 },
    { lat: 59.921000000, lon: 10.682170000, altitude: 2.2 },
    { lat: 59.920950000, lon: 10.682070000, altitude: 2.5 },
    { lat: 59.920940000, lon: 10.681950000, altitude: 3.0 },
    { lat: 59.921230000, lon: 10.681370000, altitude: 3.0 },
    { lat: 59.921390000, lon: 10.680890000, altitude: 3.0 },
    { lat: 59.921470000, lon: 10.680510000, altitude: 3.4 },
    { lat: 59.921520000, lon: 10.679990000, altitude: 4.1 },
    { lat: 59.921520000, lon: 10.679480000, altitude: 3.6 },
    { lat: 59.921500000, lon: 10.679100000, altitude: 2.9 },
    { lat: 59.921460000, lon: 10.678940000, altitude: 2.4 },
    { lat: 59.921290000, lon: 10.679000000, altitude: 2.5 },
    { lat: 59.921140000, lon: 10.679010000, altitude: 2.8 },
    { lat: 59.920940000, lon: 10.678990000, altitude: 3.4 },
    { lat: 59.920690000, lon: 10.679000000, altitude: 6.3 },
    { lat: 59.920420000, lon: 10.679020000, altitude: 9.2 },
    { lat: 59.920320000, lon: 10.679060000, altitude: 9.8 },
    { lat: 59.920240000, lon: 10.679100000, altitude: 9.5 },
    { lat: 59.920170000, lon: 10.679180000, altitude: 8.9 },
    { lat: 59.920070000, lon: 10.679340000, altitude: 8.7 },
    { lat: 59.919950000, lon: 10.679640000, altitude: 8.2 },
    { lat: 59.919750000, lon: 10.680330000, altitude: 7.3 },
    { lat: 59.919730000, lon: 10.680420000, altitude: 7.1 },
    { lat: 59.919700000, lon: 10.680620000, altitude: 8.3 },
    { lat: 59.919660000, lon: 10.680850000, altitude: 10.2 },
    { lat: 59.919580000, lon: 10.681070000, altitude: 7.9 },
    { lat: 59.919510000, lon: 10.681270000, altitude: 6.5 },
    { lat: 59.919410000, lon: 10.681470000, altitude: 5.9 },
    { lat: 59.919320000, lon: 10.681660000, altitude: 6.7 },
    { lat: 59.919190000, lon: 10.681900000, altitude: 4.9 },
    { lat: 59.919070000, lon: 10.682070000, altitude: 3.4 },
    { lat: 59.919010000, lon: 10.682130000, altitude: 3.0 },
    { lat: 59.918920000, lon: 10.682180000, altitude: 2.4 },
    { lat: 59.918770000, lon: 10.682340000, altitude: 2.2 },
    { lat: 59.918680000, lon: 10.682500000, altitude: 2.2 },
    { lat: 59.918540000, lon: 10.682810000, altitude: 2.7 },
    { lat: 59.918400000, lon: 10.683100000, altitude: 2.8 },
    { lat: 59.918350000, lon: 10.683310000, altitude: 2.9 },
    { lat: 59.918190000, lon: 10.683720000, altitude: 2.5 },
    { lat: 59.918060000, lon: 10.684130000, altitude: 3.0 },
    { lat: 59.917960000, lon: 10.684570000, altitude: 3.0 },
    { lat: 59.917900000, lon: 10.684930000, altitude: 3.0 },
    { lat: 59.917850000, lon: 10.685710000, altitude: 4.3 },
    { lat: 59.917830000, lon: 10.686340000, altitude: 4.7 },
    { lat: 59.917790000, lon: 10.686670000, altitude: 3.9 },
    { lat: 59.917610000, lon: 10.687610000, altitude: 2.8 },
    { lat: 59.917800000, lon: 10.687950000, altitude: 2.2 },
    { lat: 59.917940000, lon: 10.688300000, altitude: 1.9 },
    { lat: 59.917990000, lon: 10.688480000, altitude: 1.9 },
    { lat: 59.918010000, lon: 10.688690000, altitude: 1.8 },
    { lat: 59.918020000, lon: 10.688900000, altitude: 1.9 },
    { lat: 59.918020000, lon: 10.689120000, altitude: 1.9 },
    { lat: 59.917980000, lon: 10.689410000, altitude: 1.7 },
    { lat: 59.917950000, lon: 10.689570000, altitude: 1.7 },
    { lat: 59.917910000, lon: 10.689730000, altitude: 1.5 },
    { lat: 59.917850000, lon: 10.689900000, altitude: 1.7 },
    { lat: 59.917770000, lon: 10.690050000, altitude: 2.2 },
    { lat: 59.917590000, lon: 10.690350000, altitude: 2.5 },
    { lat: 59.917400000, lon: 10.690610000, altitude: 2.4 },
    { lat: 59.916980000, lon: 10.691080000, altitude: 1.9 },
    { lat: 59.916820000, lon: 10.691260000, altitude: 1.3 },
    { lat: 59.916580000, lon: 10.691570000, altitude: 1.3 },
    { lat: 59.916380000, lon: 10.691920000, altitude: 1.9 },
    { lat: 59.916150000, lon: 10.692380000, altitude: 2.3 },
    { lat: 59.915990000, lon: 10.692800000, altitude: 2.2 },
    { lat: 59.915840000, lon: 10.693300000, altitude: 2.9 },
    { lat: 59.915720000, lon: 10.693840000, altitude: 2.1 },
    { lat: 59.915660000, lon: 10.694160000, altitude: 1.8 },
    { lat: 59.915610000, lon: 10.694480000, altitude: 2.0 },
    { lat: 59.915460000, lon: 10.695980000, altitude: 2.1 },
    { lat: 59.915410000, lon: 10.696300000, altitude: 2.3 },
    { lat: 59.915340000, lon: 10.696610000, altitude: 2.2 },
    { lat: 59.915260000, lon: 10.696910000, altitude: 2.7 },
    { lat: 59.915180000, lon: 10.697180000, altitude: 2.2 },
    { lat: 59.914950000, lon: 10.697790000, altitude: 1.9 },
    { lat: 59.914900000, lon: 10.697900000, altitude: 2.1 },
    { lat: 59.914700000, lon: 10.698290000, altitude: 1.9 },
    { lat: 59.914430000, lon: 10.698740000, altitude: 1.9 },
    { lat: 59.914140000, lon: 10.699180000, altitude: 1.8 },
    { lat: 59.911740000, lon: 10.702730000, altitude: 2.0 },
    { lat: 59.911560000, lon: 10.703070000, altitude: 2.3 },
    { lat: 59.910990000, lon: 10.704560000, altitude: 2.7 },
    { lat: 59.910910000, lon: 10.704810000, altitude: 3.0 },
    { lat: 59.910700000, lon: 10.705550000, altitude: 2.5 },
    { lat: 59.910550000, lon: 10.706290000, altitude: 2.9 },
    { lat: 59.910450000, lon: 10.706320000, altitude: 1.9 },
    { lat: 59.910380000, lon: 10.706930000, altitude: 1.7 },
    { lat: 59.910360000, lon: 10.707620000, altitude: 1.4 },
    { lat: 59.910250000, lon: 10.708480000, altitude: 2.5 },
    { lat: 59.910226838, lon: 10.708652355, altitude: 2.8 },
    { lat: 59.910129809, lon: 10.708884328, altitude: 2.5 },
    { lat: 59.910046431, lon: 10.709451013, altitude: 3.2 },
    { lat: 59.910090000, lon: 10.709670000, altitude: 3.1 },
    { lat: 59.910126896, lon: 10.709817945, altitude: 3.2 },
    { lat: 59.910120000, lon: 10.709940000, altitude: 3.3 },
    { lat: 59.909990000, lon: 10.710390000, altitude: 3.6 },
    { lat: 59.909970000, lon: 10.710530000, altitude: 3.1 },
    { lat: 59.909960000, lon: 10.710790000, altitude: 3.0 },
    { lat: 59.909800000, lon: 10.712100000, altitude: 2.7 },
    { lat: 59.909640000, lon: 10.713690000, altitude: 3.0 },
    { lat: 59.909600000, lon: 10.714220000, altitude: 3.0 },
    { lat: 59.909560000, lon: 10.715270000, altitude: 3.0 },
    { lat: 59.909550000, lon: 10.716340000, altitude: 3.0 },
    { lat: 59.909570000, lon: 10.716860000, altitude: 2.7 },
    { lat: 59.909620000, lon: 10.717350000, altitude: 2.0 },
    { lat: 59.909690000, lon: 10.717790000, altitude: 3.0 },
    { lat: 59.909880000, lon: 10.718560000, altitude: 3.0 },
    { lat: 59.910080000, lon: 10.718980000, altitude: 3.2 },
    { lat: 59.910260000, lon: 10.719280000, altitude: 3.0 },
    { lat: 59.910430000, lon: 10.719620000, altitude: 3.5 },
    { lat: 59.910520000, lon: 10.719930000, altitude: 3.9 },
    { lat: 59.910540000, lon: 10.720250000, altitude: 3.1 },
    { lat: 59.910510000, lon: 10.720470000, altitude: 2.9 },
    { lat: 59.910470000, lon: 10.720630000, altitude: 2.8 },
    { lat: 59.910470000, lon: 10.720740000, altitude: 2.9 },
    { lat: 59.910350000, lon: 10.720980000, altitude: 3.0 },
    { lat: 59.909980000, lon: 10.721600000, altitude: 3.0 },
    { lat: 59.909630000, lon: 10.722110000, altitude: 2.6 },
    { lat: 59.909530000, lon: 10.722330000, altitude: 2.5 },
    { lat: 59.909530000, lon: 10.722380000, altitude: 2.5 },
    { lat: 59.909590000, lon: 10.722580000, altitude: 2.7 },
    { lat: 59.909290000, lon: 10.723090000, altitude: 2.9 },
    { lat: 59.909170000, lon: 10.723210000, altitude: 3.0 },
    { lat: 59.909110000, lon: 10.723220000, altitude: 3.0 },
    { lat: 59.909040000, lon: 10.723190000, altitude: 3.0 },
    { lat: 59.908210000, lon: 10.722280000, altitude: 4.0 },
    { lat: 59.908135816, lon: 10.722261545, altitude: 4.0 },
    { lat: 59.908083251, lon: 10.722316590, altitude: 4.0 },
    { lat: 59.908071345, lon: 10.722385257, altitude: 4.0 },
    { lat: 59.908080000, lon: 10.722530000, altitude: 4.0 },
    { lat: 59.908220000, lon: 10.723480000, altitude: 3.8 },
    { lat: 59.908360000, lon: 10.724280000, altitude: 1.0 },
    { lat: 59.909310000, lon: 10.726300000, altitude: 2.3 },
    { lat: 59.910550000, lon: 10.729090000, altitude: 3.0 },
    { lat: 59.910580000, lon: 10.729110000, altitude: 3.0 },
    { lat: 59.911030000, lon: 10.730270000, altitude: 2.7 },
    { lat: 59.911170000, lon: 10.730980000, altitude: 2.2 },
    { lat: 59.911160000, lon: 10.731210000, altitude: 2.2 },
    { lat: 59.910580000, lon: 10.734150000, altitude: 2.1 },
    { lat: 59.910380000, lon: 10.734470000, altitude: 2.5 },
    { lat: 59.910270000, lon: 10.734580000, altitude: 3.0 },
    { lat: 59.909980000, lon: 10.734630000, altitude: 2.7 },
    { lat: 59.909690000, lon: 10.734730000, altitude: 3.0 },
    { lat: 59.909300000, lon: 10.734870000, altitude: 2.5 },
    { lat: 59.907830000, lon: 10.734850000, altitude: 2.5 },
    { lat: 59.907600000, lon: 10.734890000, altitude: 2.9 },
    { lat: 59.907260000, lon: 10.735020000, altitude: 3.1 },
    { lat: 59.906920000, lon: 10.735190000, altitude: 6.1 },
    { lat: 59.906440000, lon: 10.735480000, altitude: 2.7 },
    { lat: 59.906170000, lon: 10.735630000, altitude: 3.0 },
    { lat: 59.905930000, lon: 10.735800000, altitude: 2.3 },
    { lat: 59.905790000, lon: 10.735930000, altitude: 2.3 },
    { lat: 59.905590000, lon: 10.736210000, altitude: 2.7 },
    { lat: 59.905460000, lon: 10.736480000, altitude: 2.8 },
    { lat: 59.905280000, lon: 10.736990000, altitude: 2.2 },
    { lat: 59.905110000, lon: 10.737490000, altitude: 2.4 },
    { lat: 59.904980000, lon: 10.737740000, altitude: 2.8 },
    { lat: 59.904940186, lon: 10.737860470, altitude: 2.8 },
    { lat: 59.904613001, lon: 10.738181187, altitude: 2.8 },
    { lat: 59.904601209, lon: 10.738209318, altitude: 2.8 },
    { lat: 59.904601575, lon: 10.738252813, altitude: 2.9 },
    { lat: 59.904621150, lon: 10.738321945, altitude: 3.0 },
    { lat: 59.904637307, lon: 10.738344189, altitude: 3.1 },
    { lat: 59.904653971, lon: 10.738340065, altitude: 3.1 },
    { lat: 59.904949277, lon: 10.738047924, altitude: 3.0 },
    { lat: 59.905140000, lon: 10.738240000, altitude: 4.2 },
    { lat: 59.905990000, lon: 10.738270000, altitude: 6.1 },
    { lat: 59.906420000, lon: 10.738330000, altitude: 6.0 },
    { lat: 59.906570000, lon: 10.738400000, altitude: 6.2 },
    { lat: 59.906860000, lon: 10.738590000, altitude: 6.0 },
    { lat: 59.907620000, lon: 10.739320000, altitude: 6.7 },
    { lat: 59.908310000, lon: 10.739940000, altitude: 7.2 },
    { lat: 59.908370000, lon: 10.739970000, altitude: 7.1 },
    { lat: 59.908420000, lon: 10.739970000, altitude: 7.1 },
    { lat: 59.908460000, lon: 10.739920000, altitude: 7.3 },
    { lat: 59.908610000, lon: 10.739330000, altitude: 8.0 },
    { lat: 59.908650000, lon: 10.739260000, altitude: 8.0 },
    { lat: 59.908710000, lon: 10.739270000, altitude: 8.0 },
    { lat: 59.910000000, lon: 10.740490000, altitude: 6.0 },
    { lat: 59.909900000, lon: 10.740850000, altitude: 6.0 },
    { lat: 59.909750000, lon: 10.741500000, altitude: 5.0 },
    { lat: 59.910696992, lon: 10.742410956, altitude: 6.0 },
    { lat: 59.910742762, lon: 10.742577117, altitude: 6.0 },
    { lat: 59.910751771, lon: 10.742775765, altitude: 6.0 },
    { lat: 59.909998288, lon: 10.745937456, altitude: 5.0 },
    { lat: 59.910627452, lon: 10.746520712, altitude: 4.1 },
    { lat: 59.911417052, lon: 10.743320856, altitude: 8.0 },
    { lat: 59.911506401, lon: 10.743234860, altitude: 8.2 },
    { lat: 59.911597237, lon: 10.743276445, altitude: 8.2 },
    { lat: 59.912430000, lon: 10.744070000, altitude: 10.7 },
    { lat: 59.912920000, lon: 10.744600000, altitude: 11.2 },
    { lat: 59.913180000, lon: 10.744840000, altitude: 11.4 },
    { lat: 59.913266839, lon: 10.744822791, altitude: 11.8 },
    { lat: 59.913341226, lon: 10.744730000, altitude: 12.1 },
    { lat: 59.914445846, lon: 10.741612697, altitude: 14.8 },
    { lat: 59.915696155, lon: 10.741153412, altitude: 13.1 },
    { lat: 59.915827065, lon: 10.741067533, altitude: 13.0 },
    { lat: 59.915894302, lon: 10.740901891, altitude: 13.2 },
    { lat: 59.915924327, lon: 10.740711866, altitude: 13.0 },
    { lat: 59.915969256, lon: 10.740365991, altitude: 12.7 },
    { lat: 59.916010235, lon: 10.740082543, altitude: 12.2 },
    { lat: 59.916572293, lon: 10.738195631, altitude: 12.0 },
    { lat: 59.917093438, lon: 10.736339416, altitude: 12.0 },
    { lat: 59.917336721, lon: 10.735604479, altitude: 13.3 },
    { lat: 59.917812537, lon: 10.736149779, altitude: 14.0 },
    { lat: 59.917886285, lon: 10.737886870, altitude: 15.0 },
    { lat: 59.918009137, lon: 10.738053358, altitude: 15.0 },
    { lat: 59.918553521, lon: 10.737173492, altitude: 16.8 },
    { lat: 59.920082069, lon: 10.735533753, altitude: 22.3 },
    { lat: 59.920214288, lon: 10.735635805, altitude: 22.8 },
    { lat: 59.921057790, lon: 10.736712604, altitude: 30.8 },
    { lat: 59.921192868, lon: 10.736730714, altitude: 31.3 },
    { lat: 59.923040255, lon: 10.735404174, altitude: 39.4 },
    { lat: 59.923126609, lon: 10.736117614, altitude: 42.0 },
    { lat: 59.923169786, lon: 10.736175890, altitude: 42.2 },
    { lat: 59.923241933, lon: 10.736171400, altitude: 42.2 },
    { lat: 59.923589782, lon: 10.735219176, altitude: 39.0 },
    { lat: 59.925887378, lon: 10.734607326, altitude: 44.2 },
    { lat: 59.926110650, lon: 10.734473591, altitude: 45.0 },
    { lat: 59.926129862, lon: 10.734350568, altitude: 45.0 },
    { lat: 59.926074478, lon: 10.734266137, altitude: 44.8 },
    { lat: 59.925875302, lon: 10.734417042, altitude: 44.1 },
    { lat: 59.924006869, lon: 10.734860661, altitude: 39.4 },
    { lat: 59.923929824, lon: 10.734506507, altitude: 38.5 },
    { lat: 59.924014942, lon: 10.734338202, altitude: 38.4 },
    { lat: 59.924305153, lon: 10.734093071, altitude: 37.5 },
    { lat: 59.924564716, lon: 10.734407341, altitude: 37.5 },
    { lat: 59.924803637, lon: 10.734409438, altitude: 37.5 },
    { lat: 59.925535535, lon: 10.733751572, altitude: 37.0 },
    { lat: 59.925645336, lon: 10.733557367, altitude: 38.2 },
    { lat: 59.925719327, lon: 10.733333610, altitude: 38.2 },
    { lat: 59.925727231, lon: 10.732893587, altitude: 39.2 },
    { lat: 59.925631140, lon: 10.732547718, altitude: 38.3 },
    { lat: 59.925489378, lon: 10.732353746, altitude: 37.4 },
    { lat: 59.925332515, lon: 10.732306780, altitude: 37.1 },
    { lat: 59.925170831, lon: 10.732375883, altitude: 37.0 },
    { lat: 59.924461162, lon: 10.733038619, altitude: 37.0 },
    { lat: 59.924369491, lon: 10.733235450, altitude: 36.7 },
    { lat: 59.924303919, lon: 10.733480020, altitude: 36.8 },
    { lat: 59.924261408, lon: 10.733900871, altitude: 37.7 },
    { lat: 59.923958123, lon: 10.734202395, altitude: 37.4 },
    { lat: 59.923733598, lon: 10.734600664, altitude: 37.8 },
    { lat: 59.923524558, lon: 10.735113278, altitude: 39.0 },
    { lat: 59.923335008, lon: 10.735223727, altitude: 39.0 },
    { lat: 59.923057639, lon: 10.735281338, altitude: 39.0 },
    { lat: 59.921133694, lon: 10.736605737, altitude: 30.9 },
    { lat: 59.920068663, lon: 10.735278790, altitude: 22.2 },
    { lat: 59.918532102, lon: 10.736980961, altitude: 16.7 },
    { lat: 59.918023603, lon: 10.737758134, altitude: 15.0 },
    { lat: 59.917981339, lon: 10.737722210, altitude: 14.9 },
    { lat: 59.917917704, lon: 10.736134988, altitude: 14.0 },
    { lat: 59.917308765, lon: 10.735352730, altitude: 13.3 },
    { lat: 59.916473391, lon: 10.738241763, altitude: 12.0 },
    { lat: 59.915954480, lon: 10.740014885, altitude: 12.0 },
    { lat: 59.915898306, lon: 10.740339929, altitude: 12.4 },
    { lat: 59.915838083, lon: 10.740672867, altitude: 13.0 },
    { lat: 59.915736566, lon: 10.740891881, altitude: 13.0 },
    { lat: 59.915538410, lon: 10.741049554, altitude: 13.0 },
    { lat: 59.914372411, lon: 10.741487505, altitude: 14.5 },
    { lat: 59.913497699, lon: 10.743880300, altitude: 13.6 },
    { lat: 59.912680206, lon: 10.743021719, altitude: 12.6 },
    { lat: 59.913797971, lon: 10.738827020, altitude: 8.8 },
    { lat: 59.913143492, lon: 10.738085302, altitude: 6.3 },
    { lat: 59.912859370, lon: 10.739277980, altitude: 9.2 },
    { lat: 59.912683247, lon: 10.739644845, altitude: 10.4 },
    { lat: 59.912430000, lon: 10.739840000, altitude: 12.3 },
    { lat: 59.912230000, lon: 10.740100000, altitude: 13.3 },
    { lat: 59.912150000, lon: 10.740280000, altitude: 13.7 },
    { lat: 59.911546882, lon: 10.742819328, altitude: 8.6 },
    { lat: 59.911442066, lon: 10.742992755, altitude: 8.2 },
    { lat: 59.911327615, lon: 10.742993224, altitude: 7.8 },
    { lat: 59.910970974, lon: 10.742673205, altitude: 6.5 },
    { lat: 59.910901249, lon: 10.742494831, altitude: 6.2 },
    { lat: 59.910896498, lon: 10.742285352, altitude: 6.4 },
    { lat: 59.911420108, lon: 10.739966904, altitude: 10.3 },
    { lat: 59.911419438, lon: 10.739731116, altitude: 11.0 },
    { lat: 59.911354637, lon: 10.739580608, altitude: 10.9 },
    { lat: 59.910450000, lon: 10.738660000, altitude: 9.9 },
    { lat: 59.910380000, lon: 10.738520000, altitude: 9.8 },
    { lat: 59.910380000, lon: 10.738390000, altitude: 9.5 },
    { lat: 59.910490000, lon: 10.737870000, altitude: 9.3 },
    { lat: 59.911060000, lon: 10.735450000, altitude: 4.1 },
    { lat: 59.911030000, lon: 10.735310000, altitude: 4.0 },
    { lat: 59.911030000, lon: 10.735140000, altitude: 3.4 },
    { lat: 59.911230000, lon: 10.734230000, altitude: 3.0 },
    { lat: 59.911470000, lon: 10.733180000, altitude: 3.3 }
];


document.addEventListener('DOMContentLoaded', function () {
    const submithalf = document.getElementById('submithalf');
    const buttons = document.querySelectorAll('.split-buttons button');
    const summaryDiv = document.querySelector('#summary');
    let selectedPercentage = 0; // Default to 0% (even splits)
    let selectedStrategy = 'even'; // Default strategy text

    function calculateSplits() {
        // Get desired time from user or set default
        const desiredTime = document.getElementById('desiredTime').value || '02:00:00';
        const splitTableBody = document.querySelector('#splitTable tbody');
        const summaryDiv = document.querySelector('#summary');
    
        // Clear previous results
        splitTableBody.innerHTML = ''; 
        summaryDiv.innerHTML = '';
    
        // Convert input time to seconds
        const timeParts = desiredTime.split(':');
        const totalSeconds = (+timeParts[0] * 3600) + (+timeParts[1] * 60) + (+timeParts[2]);
    
        // Half marathon distance in kilometers
        const totalDistance = 21.0975;
    
        // Calculate the base pace per kilometer
        const basePacePerKm = totalSeconds / totalDistance;
    
        let cumulativeTime = 0;
        let summary = {
            '5K': '',
            '10K': '',
            '15K': '',
            '20K': '',
            'race': ''
        };
    
        let paces = []; // To store all paces for adjustments
        let totalPaceSum = 0; // Sum of all paces for normalization
    
        // Calculate dynamic paces per km with adjustment
        let paceAdjustmentFactor = (selectedPercentage / 100) / totalDistance; // Adjustment factor per kilometer
    
        for (let km = 1; km <= 21; km++) {
            // Adjust pace for positive/negative splits
            let adjustment = 1 + paceAdjustmentFactor * (km - 1);
            let adjustedPace = basePacePerKm * adjustment;
            paces.push(adjustedPace);
            totalPaceSum += adjustedPace;
        }
    
        // Add the final fractional split distance to paces (for 0.0975 km)
        const finalDistance = 0.0975;
        let adjustedFinalSplitPace = basePacePerKm * finalDistance * (1 + paceAdjustmentFactor * 21);
        paces.push(adjustedFinalSplitPace);
        totalPaceSum += adjustedFinalSplitPace;
    
        // Normalize the total time to match the target race time
        let normalizationFactor = totalSeconds / totalPaceSum; // Factor to ensure total time matches desired time
        let normalizedCumulativeTime = 0;
    
        // Use trackPoints data for elevation calculations
        let elevationProfileData = []; // Array for the continuous elevation profile
        let distanceData = [];
        let cumulativeDistance = 0;

        for (let i = 1; i < trackPoints.length; i++) {
            let previousPoint = trackPoints[i - 1];
            let currentPoint = trackPoints[i];

            // Calculate distance between two points
            let distance = calculateDistance(
                previousPoint.lat, previousPoint.lon,
                currentPoint.lat, currentPoint.lon
            );
            
            // Convert distance to kilometers and add to cumulative distance
            cumulativeDistance += distance / 1000;
            
            if (cumulativeDistance > 21.0975) {
                break; // Stop once we exceed the half marathon distance
            }

            distanceData.push(cumulativeDistance.toFixed(2));

            // Push the altitude of each track point directly to create a continuous elevation profile
            elevationProfileData.push(currentPoint.altitude);

            // Calculate splits per km
            if (i <= 21) { 
                let normalizedPace = paces[i - 1] * normalizationFactor; // Apply normalization factor
                normalizedCumulativeTime += normalizedPace;
    
                const splitTime = formatTime(normalizedPace, false);
                const cumulativeFormatted = formatTime(normalizedCumulativeTime, true);
    
                // Capture summary times for 5k, 10k, 15k, 20k, and finish
                if (i === 5) summary['5K'] = cumulativeFormatted;
                if (i === 10) summary['10K'] = cumulativeFormatted;
                if (i === 15) summary['15K'] = cumulativeFormatted;
                if (i === 20) summary['20K'] = cumulativeFormatted;
                if (i === 21) summary['race'] = cumulativeFormatted;
    
                // Add new row to the table
                const [splitMinute, splitSecond] = splitTime.split(':');
                const row = `<tr>
                                <td>${i}</td>
                                <td><div></div></td>
                                <td><span id="minute-split-${i}">${splitMinute}</span>:<span id="seconds-split-${i}">${splitSecond}</span> /km</td>
                                <td>${cumulativeFormatted}</td>
                                ${manualChecked.checked? 
                                    `<td><label>Minutes: <input id="minute-${i}" type="number" value="${Math.floor(normalizedPace / 60)}" /></label>
                                    <label>Seconds: <input id="seconds-${i}" type="number" value="${Math.floor(normalizedPace % 60)}" /></label></td>` 
                                    : ''}
                            </tr>`;
                            splitTableBody.innerHTML += row;
            }
        }

        // Handle the last fractional part (0.0975 km)
        let normalizedFinalSplit = paces[21] * normalizationFactor; // Normalize the last part
        normalizedCumulativeTime += normalizedFinalSplit;
        const finalCumulativeFormatted = formatTime(normalizedCumulativeTime, true);
        const averagePaceLastSplit = formatTime(paces[21] * normalizationFactor / finalDistance, false);

        // Add the last fractional row (0.0975 km) to the table
        const finalRow = `<tr>
            <td>${finalDistance.toFixed(3)}</td>
            <td>Last Elevation</td>
            <td><span id="minute-split-22">${averagePaceLastSplit.split(':')[0]}</span>:<span id="seconds-split-22">${averagePaceLastSplit.split(':')[1]}</span> /km</td>
            <td>${finalCumulativeFormatted}</td>
            ${manualChecked.checked? 
                `<td><label>Minutes: <input id="minute-22" type="number" value="${Math.floor(normalizedFinalSplit / 60)}" /></label>
                <label>Seconds: <input id="seconds-22" type="number" value="${Math.floor(normalizedFinalSplit % 60)}" /></label></td>` 
                : ''}
        </tr>`;
        splitTableBody.innerHTML += finalRow;
    
        // Update summary
        summaryDiv.innerHTML = `
            <h2>Summary (${selectedStrategy} split)</h2>
            <p><span>5 km:</span> ${summary['5K']}</p>
            <p><span>10 km:</span> ${summary['10K']}</p>
            <p><span>15 km:</span> ${summary['15K']}</p>
            <p><span>20 km: </span>${summary['20K']}</p>
            <p><span>Half Marathon: </span>${summary['race']}</p>
        `;

        // Render the elevation chart
        Highcharts.chart('chart-container', {
            title: {
                text: 'Elevation Profile Over Distance'
            },
            xAxis: {
                title: {
                    text: 'Distance (km)'
                },
                categories: distanceData
            },
            yAxis: {
                title: {
                    text: 'Elevation (meters)'
                }
            },
            series: [
                {
                    name: 'Elevation Profile',
                    data: elevationProfileData, // Continuous elevation profile
                    color: 'green'
                }
            ]
        });
    }

    // Function to format seconds into hh:mm:ss or mm:ss
    function formatTime(seconds, includeHours) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
    
        // Pad minutes and seconds with leading zero if necessary
        const paddedM = m.toString().padStart(2, '0');
        const paddedS = s.toString().padStart(2, '0');
    
        if (includeHours) {
            return `${h}:${paddedM}:${paddedS}`;
        } else {
            return `${paddedM}:${paddedS}`;
        }
    }

    function recalculateCumulativeTimes() {
        let cumulativeTime = 0;
    
        // Loop through all splits (kilometer rows), including the final 0.0975 km row
        for (let i = 1; i <= 22; i++) { // Notice the range now includes 22
            // Retrieve the updated minutes and seconds from the input fields
            const inputMinutes = parseInt(document.getElementById(`minute-${i}`).value) || 0;
            const inputSeconds = parseInt(document.getElementById(`seconds-${i}`).value) || 0;
    
            // Convert the minutes and seconds to total seconds for this split
            const splitTimeInSeconds = (inputMinutes * 60) + inputSeconds;
    
            // Add the split time to the cumulative time
            cumulativeTime += splitTimeInSeconds;
    
            // Format the cumulative time as hh:mm:ss or mm:ss
            const cumulativeFormatted = formatTime(cumulativeTime, true);
    
            // Update the cumulative time in the table (find the appropriate cell for the cumulative time)
            const cumulativeCell = document.querySelector(`#splitTable tr:nth-child(${i}) td:nth-child(4)`); // Adjust column index if needed
            if (cumulativeCell) {
                cumulativeCell.textContent = cumulativeFormatted;
            }
        }
    }

    // Event listener for the submit button
    submithalf.addEventListener('click', function () {
        calculateSplits(); // Calculate even splits on initial submit

        function updateContent(event) {
            // Get the id of the input field that triggered the event (e.g., "minute-1" or "seconds-1")
            const inputId = event.target.id;
            
            // Extract the numeric part from the input id (split number)
            const idNumber = inputId.split('-')[1];
            
            // Determine if the input is for minutes or seconds
            const isMinuteInput = inputId.startsWith('minute');
            const isSecondInput = inputId.startsWith('seconds');
            
            // Find the corresponding minute and second elements
            const targetMinute = document.getElementById(`minute-split-${idNumber}`);
            const targetSecond = document.getElementById(`seconds-split-${idNumber}`);
            
            // Update the target split time cell's text content
            let inputValue = parseInt(event.target.value) || 0; // Default to 0 if the field is empty
            
            if (isMinuteInput) {
                // Ensure minutes are in a reasonable range, e.g., 2 to 12 minutes per km
                if (inputValue < 2) inputValue = 2;
                if (inputValue > 12) inputValue = 12;
                const formattedMinutes = inputValue < 10 ? `0${inputValue}` : `${inputValue}`;
                targetMinute.textContent = formattedMinutes;
            } else if (isSecondInput) {
                // Ensure seconds are between 0 and 59
                if (inputValue < 0) inputValue = 0;
                if (inputValue >= 60) inputValue = 59; // We typically wouldn't have 60+ seconds
                const formattedSeconds = inputValue < 10 ? `0${inputValue}` : `${inputValue}`;
                targetSecond.textContent = formattedSeconds;
            }
            
            // Recalculate cumulative times based on the changes
            recalculateCumulativeTimes();
        }

        // Attach event listeners to all input fields
        for (let i = 1; i <= 21; i++) {
            const inputMinutes = document.getElementById(`minute-${i}`);
            const inputSeconds = document.getElementById(`seconds-${i}`);
            inputMinutes.addEventListener('input', updateContent);
            inputSeconds.addEventListener('input', updateContent);
        }
    });

    // Event listeners for each percentage button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Set selected percentage based on button clicked
            selectedStrategy = button.innerText;
            switch(button.id) {
                case 'n5': selectedPercentage = -5; break;
                case 'n3': selectedPercentage = -3; break;
                case 'n1': selectedPercentage = -1; break;
                case 'default': selectedPercentage = 0; break;
                case 'p1': selectedPercentage = 1; break;
                case 'p3': selectedPercentage = 3; break;
                case 'p5': selectedPercentage = 5; break;
            }

            // Recalculate splits with the new percentage
            calculateSplits();
        });
    });

});

// Function to calculate distance between two points (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius of the Earth in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
}


const manualChecked = document.getElementById('manual');
const headerRow = document.getElementById('headerRow');
let manualPaceInput;

manualChecked.addEventListener('change', function () {
    if(manualChecked.checked) {
        manualPaceInput = document.createElement('th');
        manualPaceInput.innerHTML = 'Change pace manually';
        headerRow.appendChild(manualPaceInput);
    } else {
        manualPaceInput.remove();
        manualPaceInput = null; // Clear the reference
    }
});