<?php



namespace Planck\Navigation;

use Planck\Exception;
use Planck\Model\EntityLoader;
use Planck\Traits\IsApplicationObject;

class Item
{

    use IsApplicationObject;


    const TYPE_ROUTE = 'route';

    const PARAMETER_ENTITY = 'entity';

    protected $type;
    protected $routeName;


    protected $parameters = [];

    protected $label = '';


    protected $entityLoader;



    public function loadByDescriptor(array $descriptor)
    {

        $this->label = $descriptor['label'];

        $this->setType($descriptor['type']);
        $this->setRoute($descriptor['route']);

        if(!empty($descriptor['parameters'])) {
            foreach ($descriptor['parameters'] as $parameterName => $parameterDescriptor) {
                if($parameterDescriptor['type'] == static::PARAMETER_ENTITY) {

                    $entityLoader = $this->getEntityLoaderByDescriptor($parameterDescriptor);
                    //$entity = $this->entityLoader->getEntity();
                    $this->setParameter(
                        $parameterName,
                        $entityLoader
                    );


                }
            }
        }

    }


    protected function getEntityLoaderByDescriptor($descriptor)
    {
        $entityLoader = new EntityLoader($this->getApplication()->getModel());
        $entityLoader->setEntityType($descriptor['entity']);
        $entityLoader->setLoadMethod($descriptor['loadMethod']);

        foreach ($descriptor['attributes'] as $attributeName => $value) {
            $entityLoader->setAttributeValue($attributeName, $value);
        }

        return $entityLoader;
    }


    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }


    public function setRoute($routeName)
    {
        $this->routeName = $routeName;
    }


    public function setParameter($name, $parameter)
    {
        $this->parameters[$name] = $parameter;
        return $this;
    }

    public function getURL()
    {
        if($this->type == static::TYPE_ROUTE) {
            return $this->getURLByRoute();
        }
    }

    public function getLabel()
    {
        return $this->label;
    }


    public function getURLByRoute()
    {
        if(!$this->routeName) {
            throw new Exception('A route name must be specified');
        }

        $parameters = [];
        foreach ($this->parameters as $paramterName => $parameter) {
            if($parameter instanceof EntityLoader) {
                $parameters[] = $parameter->getEntity();
            }
            else {
                $parameters[] = $parameter;
            }
        }


        return $this->getApplication()->buildRoute($this->routeName, $parameters);
    }


}


