(ns find-distinct-items)

;; Difficulty:	Medium
;; Topics:	seqs core-functions
;; Write a function which removes the duplicates from a sequence. Order of the items must be maintained.
;; Special Restrictions
;; distinct

(= (__ [1 2 1 3 1 2 4]) [1 2 3 4])
(= (__ [:a :a :b :b :c :c]) [:a :b :c])
(= (__ '([2 4] [1 2] [1 3] [1 3])) '([2 4] [1 2] [1 3]))
(= (__ (range 50)) (range 50))

;; Solution
(fn [coll]
    (second
     (reduce
      (fn [[seen coll] i]
          (if (contains? seen i)
            [seen coll]
            [(conj seen i) (conj coll i)]))
      [#{} []]
      coll)))
