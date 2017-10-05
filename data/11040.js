{
  if (child.ssrOptimizability !== optimizability.FULL) {
    node.ssrOptimizability = selfUnoptimizable
      ? optimizability.PARTIAL
      : optimizability.SELF;
  }
}
